#!/bin/bash

# 🪄 SECRET MIGRATOR
# Copies secrets from 'saas-validator' to 'auto-invent'

OLD_REPO="21e8-miner/saas-validator"
NEW_REPO="21e8-miner/auto-invent"

echo "🪄 Migrating Secrets from $OLD_REPO to $NEW_REPO..."
echo "=================================================="

# Helper function to copy a secret
copy_secret() {
    SECRET_NAME=$1
    echo "Processing $SECRET_NAME..."
    
    # Check if secret exists in old repo (hacky way via list)
    # Actually, gh doesn't let us READ secret values for security.
    # We can only SET them.
    
    # Ah! I cannot read the old values back. That is a GitHub security feature.
    # WE MUST ASK THE USER FOR INPUT AGAIN if they aren't stored locally.
    
    # HOWEVER! I wrote 'finalize-secrets.sh' in the old folder.
    # If the user still has the .p8 file, we can re-upload easily.
}

echo "⚠️ GitHub Security prevents reading old secrets."
echo "We need to re-upload your Apple Keys."
echo ""

# 1. APPLE ISSUER ID
read -p "Paste Apple Issuer ID: " ISSUER_ID
if [ -n "$ISSUER_ID" ]; then
    echo "$ISSUER_ID" | gh secret set APP_STORE_CONNECT_ISSUER_ID --repo $NEW_REPO
    echo "✅ Issuer ID set."
fi

# 2. APPLE KEY ID
read -p "Paste Key ID (e.g. M48...): " KEY_ID
if [ -n "$KEY_ID" ]; then
    echo "$KEY_ID" | gh secret set APP_STORE_CONNECT_API_KEY_ID --repo $NEW_REPO
    echo "✅ Key ID set."
fi

# 3. PRIVATE KEY FILE
echo ""
echo "Drag and drop your .p8 file here:"
read -p "Path: " KEY_PATH
# Clean path
KEY_PATH=$(echo "$KEY_PATH" | sed 's/\\ / /g' | tr -d "'")
KEY_PATH="${KEY_PATH%"${KEY_PATH##*[![:space:]]}"}"

if [ -f "$KEY_PATH" ]; then
    gh secret set APP_STORE_CONNECT_API_KEY_CONTENT --repo $NEW_REPO < "$KEY_PATH"
    echo "✅ Private Key set."
else
    echo "⚠️ Skipping Key file (not found)"
fi

# 4. OPENAI KEY
echo ""
echo "🤖 OpenAI API Key (for the Brain):"
read -p "Key (sk-...): " OPENAI_KEY
if [ -n "$OPENAI_KEY" ]; then
    echo "$OPENAI_KEY" | gh secret set OPENAI_API_KEY --repo $NEW_REPO
    echo "✅ OpenAI Key set."
fi

echo ""
echo "🎉 Secrets Configured!"
