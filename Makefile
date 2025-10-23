PROJECT_NAME=fit-tracker

up:
	docker compose -p $(PROJECT_NAME) -f docker/docker-compose.yml up --build

down:
	docker compose -p $(PROJECT_NAME) -f docker/docker-compose.yml down

restart:
	make down && make up

ps:
	docker compose -p fit-tracker -f docker/docker-compose.yml ps

db:
	docker exec -it fit-db psql -U postgres -d fittracker
