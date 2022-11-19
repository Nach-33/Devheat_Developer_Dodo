import yfinance as yf
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_score


stockName = yf.Ticker("^GSPC")
stockName = stockName.history(period="max")
stockName.index = pd.to_datetime(stockName.index)
stockName.plot.line(y="Close", use_index=True)
del stockName["Dividends"]
del stockName["Stock Splits"]
stockName["Tomorrow"] = stockName["Close"].shift(-1)
stockName["Target"] = (stockName["Tomorrow"] > stockName["Close"]).astype(int)
stockName = stockName.loc["1990-01-01":].copy()
model = RandomForestClassifier(n_estimators=100, min_samples_split=100, random_state=1)
train = stockName.iloc[:-100]
test = stockName.iloc[-100:]
predictors = ["Close", "Volume", "Open", "High", "Low"]
model.fit(train[predictors], train["Target"])
preds = model.predict(test[predictors])
preds = pd.Series(preds, index=test.index)
print(precision_score(test["Target"], preds))
combined = pd.concat([test["Target"], preds], axis=1)
def predict(train, test, predictors, model):
    model.fit(train[predictors], train["Target"])
    preds = model.predict(test[predictors])
    preds = pd.Series(preds, index=test.index, name="Predictions")
    combined = pd.concat([test["Target"], preds], axis=1)
    return combined
def backtest(data, model, predictors, start=2500, step=250):
    all_predictions = []

    for i in range(start, data.shape[0], step):
        train = data.iloc[0:i].copy()
        test = data.iloc[i:(i+step)].copy()
        predictions = predict(train, test, predictors, model)
        all_predictions.append(predictions)
    
    return pd.concat(all_predictions)
predictions = backtest(stockName, model, predictors)
predictions["Predictions"].value_counts()
PredictedFinalans = (predictions["Target"].value_counts() / predictions.shape[0])[0]
print(PredictedFinalans)