SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.expenses (
  "_id" serial NOT NULL,
	"date" varchar NOT NULL,
	"amount" serial NOT NULL,
	"category_id" serial NOT NULL,
  "description" varchar NOT NULL,
  CONSTRAINT "expenses_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.income (
  "_id" serial NOT NULL,
	"date" varchar NOT NULL,
	"amount" serial NOT NULL,
	"category_id" serial NOT NULL,
  "description" varchar NOT NULL,
  CONSTRAINT "income_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.savings (
  "_id" serial NOT NULL,
	"date" varchar NOT NULL,
	"amount" serial NOT NULL,
	"category_id" serial NOT NULL,
  "description" varchar NOT NULL,
  CONSTRAINT "savings_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.expense_categories (
  "_id" serial NOT NULL,
  "category_name" varchar NOT NULL,
	"budget_amount" serial NOT NULL,
  CONSTRAINT "expense_categories_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.income_categories (
  "_id" serial NOT NULL,
  "category_name" varchar NOT NULL,
	"budget_amount" serial NOT NULL,
  CONSTRAINT "income_categories_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.savings_categories (
  "_id" serial NOT NULL,
  "category_name" varchar NOT NULL,
	"budget_amount" serial NOT NULL,
  CONSTRAINT "savings_categories_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.expenses ADD CONSTRAINT "expenses_fk0" FOREIGN KEY ("category_id") REFERENCES public.expense_categories("_id");

ALTER TABLE public.income ADD CONSTRAINT "income_fk0" FOREIGN KEY ("category_id") REFERENCES public.income_categories("_id");

ALTER TABLE public.savings ADD CONSTRAINT "savings_fk0" FOREIGN KEY ("category_id") REFERENCES public.savings_categories("_id");
