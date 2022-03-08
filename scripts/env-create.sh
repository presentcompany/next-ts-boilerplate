if [ ! -f .env ]; then \
  echo "No '.env' file found. Creating new '.env' with sample variables..."
  cat << EOF > .env
NEXT_PUBLIC_APP_NAME='My Web App'
NEXT_PUBLIC_BASE_URL='http://localhost:3000'
NEXT_PUBLIC_APP_PREFIX=MAN
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_API='https://jsonplaceholder.typicode.com'
NEXT_PUBLIC_GOOGLE_RECAPTCHA_API=1234
EOF
else 
  echo "An '.env' file is found. Omitting creation of new '.env' file."
fi; \
