--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2023-01-23 03:42:48

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 25465)
-- Name: allMovies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."allMovies" (
    id integer NOT NULL,
    "movieName" text NOT NULL,
    "movieStream" text NOT NULL,
    "genderId" integer NOT NULL,
    "movieStatus" text NOT NULL,
    "movieDescription" text,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."allMovies" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 25464)
-- Name: allMovies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."allMovies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."allMovies_id_seq" OWNER TO postgres;

--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 216
-- Name: allMovies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."allMovies_id_seq" OWNED BY public."allMovies".id;


--
-- TOC entry 215 (class 1259 OID 25453)
-- Name: moviesGenders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."moviesGenders" (
    id integer NOT NULL,
    "genderName" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."moviesGenders" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 25452)
-- Name: moviesGenders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."moviesGenders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."moviesGenders_id_seq" OWNER TO postgres;

--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 214
-- Name: moviesGenders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."moviesGenders_id_seq" OWNED BY public."moviesGenders".id;


--
-- TOC entry 3180 (class 2604 OID 25468)
-- Name: allMovies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."allMovies" ALTER COLUMN id SET DEFAULT nextval('public."allMovies_id_seq"'::regclass);


--
-- TOC entry 3178 (class 2604 OID 25456)
-- Name: moviesGenders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."moviesGenders" ALTER COLUMN id SET DEFAULT nextval('public."moviesGenders_id_seq"'::regclass);


--
-- TOC entry 3336 (class 0 OID 25465)
-- Dependencies: 217
-- Data for Name: allMovies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."allMovies" (id, "movieName", "movieStream", "genderId", "movieStatus", "movieDescription", "createdAt") FROM stdin;
10	jhon wick 2	netflix	1	SLKSSSS	ABSURDOO	2023-01-22 20:37:20.210458
3	jhon wick	netflix	1	meio merda	PORRAAA	2023-01-22 20:34:59.076698
12	jhon wick 74	netflix	1	nao comecei	\N	2023-01-23 00:09:55.748964
14	jhon wick 22	netflix	1	nao comecei	\N	2023-01-23 00:10:28.126134
16	shrek 2	netflix	1	nao comecei	\N	2023-01-23 00:10:57.919849
71	shrek 2341	netflix	1	nao comecei	\N	2023-01-23 02:12:00.329222
20	shrek 45	netflix	1	nao comecei	\N	2023-01-23 00:15:03.299484
32	shrek 434	netflix	1	nao comecei	\N	2023-01-23 00:20:44.785091
24	shrek 	netflix	1	nao comecei	\N	2023-01-23 00:18:49.213057
81	nao	final	1	nao comecei	OLOCKO	2023-01-23 03:24:11.519001
82	naofthhft	final	1	nao comecei	OLOCKO	2023-01-23 03:24:30.697542
84	naoftdhhft	final	1	nao comecei	OLOCKO	2023-01-23 03:24:56.807114
46	shrek 4	netflix	1	nao comecei	\N	2023-01-23 01:35:42.696515
\.


--
-- TOC entry 3334 (class 0 OID 25453)
-- Dependencies: 215
-- Data for Name: moviesGenders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."moviesGenders" (id, "genderName", "createdAt") FROM stdin;
1	ação	2023-01-22 19:47:21.080018
2	drama	2023-01-22 19:49:00.068415
3	terror	2023-01-22 19:49:00.068415
4	comédia	2023-01-22 19:50:25.996569
5	romance	2023-01-22 19:50:25.996569
6	ficção científica	2023-01-22 19:50:25.996569
7	suspense	2023-01-22 19:51:04.056041
8	musical	2023-01-22 19:51:19.330693
\.


--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 216
-- Name: allMovies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."allMovies_id_seq"', 84, true);


--
-- TOC entry 3345 (class 0 OID 0)
-- Dependencies: 214
-- Name: moviesGenders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."moviesGenders_id_seq"', 8, true);


--
-- TOC entry 3187 (class 2606 OID 25475)
-- Name: allMovies allMovies_movieName_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."allMovies"
    ADD CONSTRAINT "allMovies_movieName_key" UNIQUE ("movieName");


--
-- TOC entry 3189 (class 2606 OID 25473)
-- Name: allMovies allMovies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."allMovies"
    ADD CONSTRAINT "allMovies_pkey" PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 25463)
-- Name: moviesGenders moviesGenders_genderName_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."moviesGenders"
    ADD CONSTRAINT "moviesGenders_genderName_key" UNIQUE ("genderName");


--
-- TOC entry 3185 (class 2606 OID 25461)
-- Name: moviesGenders moviesGenders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."moviesGenders"
    ADD CONSTRAINT "moviesGenders_pkey" PRIMARY KEY (id);


--
-- TOC entry 3190 (class 2606 OID 25476)
-- Name: allMovies allMovies_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."allMovies"
    ADD CONSTRAINT "allMovies_fk0" FOREIGN KEY ("genderId") REFERENCES public."moviesGenders"(id);


-- Completed on 2023-01-23 03:42:48

--
-- PostgreSQL database dump complete
--

