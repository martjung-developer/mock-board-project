-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.auth (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text,
  email text UNIQUE,
  password text,
  role text,
  assign_by text,
  status text,
  CONSTRAINT auth_pkey PRIMARY KEY (id)
);
CREATE TABLE public.exam_record (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  parts text,
  score smallint,
  email text,
  assign_by text,
  examinee_name text,
  passing_score smallint,
  status text,
  category text,
  exam_title text,
  CONSTRAINT exam_record_pkey PRIMARY KEY (id),
  CONSTRAINT exam_record_email_fkey FOREIGN KEY (email) REFERENCES public.auth(email)
);
CREATE TABLE public.storage (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  file_dir text,
  email text,
  exam_title text,
  items smallint,
  duration text,
  parts text,
  category text,
  CONSTRAINT storage_pkey PRIMARY KEY (id),
  CONSTRAINT storage_email_fkey FOREIGN KEY (email) REFERENCES public.auth(email)
);