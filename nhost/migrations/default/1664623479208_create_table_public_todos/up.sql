CREATE TABLE "public"."todos" ("id" uuid NOT NULL, "title" text NOT NULL, "text" text NOT NULL, "userId" uuid NOT NULL, "createDate" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
