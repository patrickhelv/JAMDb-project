

docker-build:
	docker build -t backend .

docker-start:
	docker run -p 4000:4000 --rm backend

rm:
	rm -r ./node_modules
	docker rmi backend