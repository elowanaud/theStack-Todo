
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# The Stack

A brief description of what this project does and who it's for


## Run Locally

Go to the project directory

```bash
  cd the-stack
```

Install dependencies

```bash
  pnpm install
```

Start every servers

```bash
  pnpm run dev
```

Start frontend server

```bash
  cd apps/frontend
  pnpm dev
```

Start Redis / Postresql

```bash
  cd apps/backend
  docker compose up
```

Start backend server

```bash
  cd apps/backend
  pnpm dev
```

Run database migration and seed

```bash
  cd apps/backend
  node ace migration:run
  node ace db:seed
```


Start Backend Worker

```bash
  cd apps/backend
  node ace queue:listen --queue=email
```
## Deployment

To deploy this project in staging you just need to push on `dev` branch

To deploy this project in production you just need to push on `main` brach
