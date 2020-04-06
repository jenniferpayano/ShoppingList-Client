curl "https://shoppinglists-api.herokuapp.com/lists" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "list": {
      "name": "'"${NAME}"'",
      "budget": "'"${BUDGET}"'",
     "user_id": "'"${USER_ID}"'"
    }
  }'
echo
