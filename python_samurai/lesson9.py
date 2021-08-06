import csv
import json
import requests


KEYID = '3660fbbbd98b1edb'
COUNT = 100
PREF = "Z011"
FREEWORD = "渋谷駅"
FORMAT = "json"

PARAMS = {
    "key": KEYID,
    "count": COUNT,
    "large_area": PREF,
    "keyword": FREEWORD,
    "format": FORMAT
}

json_res = requests.get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/", params=PARAMS).text
response = json.loads(json_res)

def write_data_to_csv(params):
    restaurants = [["名称", "営業所", "住所", "アクセス"]]
    json_res = requests.get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/", params=PARAMS).text
    response = json.loads(json_res)
    
    if "error" in response["results"]:
        return print("エラーが発生しました！")
    for restaurant in response["results"]["shop"]:
        rest_info = [restaurant["name"], restaurant["open"], restaurant["address"], restaurant["access"]]
        restaurants.append(rest_info)
    with open("restaurants_list.csv", "w") as f:
        writer = csv.writer(f)
        writer.writerow(restaurants)
    return print(restaurants)
    
write_data_to_csv(PARAMS)