from twilio.rest import Client

account_sid = 'ACfc288a2abc8e485d8383bcd0dbb23a8d'
auth_token = '6123cb974bc495c71b2bbe86d5245793'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body=priceData,
                              from_='+15208679675',
                              to=userNumber
                          )

print(message.sid)