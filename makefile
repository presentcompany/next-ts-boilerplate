SHELL           := /bin/bash
.DEFAULT_GOAL   := help
.SILENT:        #don't echo commands as they run

# ==============================================================================
-include .env
DIR             := ${CURDIR}
UNAME           := `uname`
UUID            := `id -u`
GUID            := `id -g`

ifeq (Darwin, $(findstring Darwin, $(shell uname -a)))
	PLATFORM    := OSX
	OPEN        := open
else
	PLATFORM    := Linux
	OPEN        := xdg-open
endif

# Declare Variables
ifdef APP_ENV
	ENV ?= ${APP_ENV}
else
	ENV ?= "local"
endif


.PHONY: help
help:   # List helpful commands
	echo ''
	echo 'Makefile for '
	echo ' make help                        show this information'
	echo ' make help:env                    list env:* commands'
	echo ''

help\:env:
	echo '## make env:* commands -'
	echo ' make env:clean                   delete .env file'
	echo ' make env:setup                   create .env file if it doesnt exist'
	echo ' make env:reset                   Recreate .env file from example'
	echo ''

help\:commands:
	echo '## Common make commands:'
	echo ' make setup                      alias for setup:app'
	echo ''

# Setup ============================================================================

setup: 
	make env\:reset \
		nvm\:install \

# ENV ==============================================================================

env\:help:
	make help:env

env\:clean:
	if [ -f .env ]; then \
		rm .env; \
	fi; \

env\:setup:
	echo "Creating '.env' file (if it does not exist)"; \
	if [ ! -f .env ]; then \
		cp .env.sample .env; \
	else 
		echo ".env file found. Skipping .env copy."
	fi; \
	chmod 664 .env; \

env\:reset:
	make env\:clean \
		env\:setup

# NVM ==============================================================================

NVM := $(HOME)/.nvm/nvm.sh
IS_NVM_EXISTS := $(shell test -f $(NVM); echo $$?)

nvm\:install:
ifeq ($(IS_NVM_EXISTS), 0)
	echo "NVM found. Proceeding to install Yarn dependencies." && make yarn\:install
endif

# Yarn ==============================================================================

yarn\:install:
	if [[ -f ".nvmrc" ]]; then \
		set -e; \
		echo "Installing Yarn dependencies"; \
		source $(HOME)/.bashrc; \
		source $(HOME)/.nvm/nvm.sh; \
		nvm use && yarn; \
	else \
		echo "No .nvmrc found. Switching to default system Node version and proceeding with Yarn dependencies installation."; \
		nvm use default && yarn; \
	fi; \