

docker-build:
	docker build -t frontend .

docker-start:
	docker run -p 3000:3000 --rm frontend

rm:
	rm -r ./node_modules
	docker rmi backend