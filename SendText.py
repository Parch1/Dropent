from twilio.rest import Client

account_sid = 'hidden'
auth_token = 'hidden'
client = Client(account_sid, auth_token)

message = client.messages.create(
                              body=priceData,
                              from_='hidden',
                              to=userNumber
                          )

print(message.sid)
