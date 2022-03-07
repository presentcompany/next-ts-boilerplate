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
	fi; \
	chmod 664 .env; \

env\:reset:
	make env\:clean \
		env\:setup


