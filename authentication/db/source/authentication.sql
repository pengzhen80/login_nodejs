PGDMP             
             {            authentication     15.1 (Ubuntu 15.1-1.pgdg22.04+1)     15.1 (Ubuntu 15.1-1.pgdg22.04+1)      \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            _           1262    428281    authentication    DATABASE     z   CREATE DATABASE authentication WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'zh_TW.UTF-8';
    DROP DATABASE authentication;
                pengzhen    false            ?            1259    428356    auth_email_verify    TABLE     p   CREATE TABLE public.auth_email_verify (
    hashid character varying NOT NULL,
    user_id character varying
);
 %   DROP TABLE public.auth_email_verify;
       public         heap    pengzhen    false            ?            1259    428282 
   auth_group    TABLE     h   CREATE TABLE public.auth_group (
    group_id character varying NOT NULL,
    name character varying
);
    DROP TABLE public.auth_group;
       public         heap    pengzhen    false            ?            1259    428289    auth_group_permission    TABLE     ?   CREATE TABLE public.auth_group_permission (
    permission_id character varying NOT NULL,
    group_id character varying NOT NULL
);
 )   DROP TABLE public.auth_group_permission;
       public         heap    pengzhen    false            ?            1259    428296    auth_permission    TABLE     ?   CREATE TABLE public.auth_permission (
    permission_id character varying NOT NULL,
    name character varying,
    content_type_id integer,
    codename character varying
);
 #   DROP TABLE public.auth_permission;
       public         heap    pengzhen    false            ?            1259    428317 	   auth_user    TABLE     ?  CREATE TABLE public.auth_user (
    user_id character varying NOT NULL,
    password character varying(128),
    last_login timestamp with time zone,
    is_superuser boolean,
    username character varying(30),
    first_name character varying(30),
    last_name character varying(30),
    email character varying(254),
    active boolean,
    date_joined timestamp with time zone
);
    DROP TABLE public.auth_user;
       public         heap    pengzhen    false            ?            1259    428303    auth_user_groups    TABLE     ?   CREATE TABLE public.auth_user_groups (
    auth_user_groups_id character varying NOT NULL,
    user_id character varying,
    group_id character varying
);
 $   DROP TABLE public.auth_user_groups;
       public         heap    pengzhen    false            ?            1259    428310    auth_user_permission    TABLE     ?   CREATE TABLE public.auth_user_permission (
    auth_user_permission_id character varying NOT NULL,
    user_id character varying,
    permission_id character varying
);
 (   DROP TABLE public.auth_user_permission;
       public         heap    pengzhen    false            Y          0    428356    auth_email_verify 
   TABLE DATA           <   COPY public.auth_email_verify (hashid, user_id) FROM stdin;
    public          pengzhen    false    220   *       S          0    428282 
   auth_group 
   TABLE DATA           4   COPY public.auth_group (group_id, name) FROM stdin;
    public          pengzhen    false    214   %*       T          0    428289    auth_group_permission 
   TABLE DATA           H   COPY public.auth_group_permission (permission_id, group_id) FROM stdin;
    public          pengzhen    false    215   B*       U          0    428296    auth_permission 
   TABLE DATA           Y   COPY public.auth_permission (permission_id, name, content_type_id, codename) FROM stdin;
    public          pengzhen    false    216   _*       X          0    428317 	   auth_user 
   TABLE DATA           ?   COPY public.auth_user (user_id, password, last_login, is_superuser, username, first_name, last_name, email, active, date_joined) FROM stdin;
    public          pengzhen    false    219   |*       V          0    428303    auth_user_groups 
   TABLE DATA           R   COPY public.auth_user_groups (auth_user_groups_id, user_id, group_id) FROM stdin;
    public          pengzhen    false    217   ?*       W          0    428310    auth_user_permission 
   TABLE DATA           _   COPY public.auth_user_permission (auth_user_permission_id, user_id, permission_id) FROM stdin;
    public          pengzhen    false    218   ?*       ?           2606    428362 (   auth_email_verify auth_email_verify_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.auth_email_verify
    ADD CONSTRAINT auth_email_verify_pkey PRIMARY KEY (hashid);
 R   ALTER TABLE ONLY public.auth_email_verify DROP CONSTRAINT auth_email_verify_pkey;
       public            pengzhen    false    220            ?           2606    428295 0   auth_group_permission auth_group_permission_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.auth_group_permission
    ADD CONSTRAINT auth_group_permission_pkey PRIMARY KEY (permission_id);
 Z   ALTER TABLE ONLY public.auth_group_permission DROP CONSTRAINT auth_group_permission_pkey;
       public            pengzhen    false    215            ?           2606    428288    auth_group auth_group_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (group_id);
 D   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_pkey;
       public            pengzhen    false    214            ?           2606    428302 $   auth_permission auth_permission_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (permission_id);
 N   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_pkey;
       public            pengzhen    false    216            ?           2606    428355    auth_user auth_user_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.auth_user DROP CONSTRAINT auth_user_email_key;
       public            pengzhen    false    219            ?           2606    428309 &   auth_user_groups auth_user_groups_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (auth_user_groups_id);
 P   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_pkey;
       public            pengzhen    false    217            ?           2606    428316 .   auth_user_permission auth_user_permission_pkey 
   CONSTRAINT     ?   ALTER TABLE ONLY public.auth_user_permission
    ADD CONSTRAINT auth_user_permission_pkey PRIMARY KEY (auth_user_permission_id);
 X   ALTER TABLE ONLY public.auth_user_permission DROP CONSTRAINT auth_user_permission_pkey;
       public            pengzhen    false    218            ?           2606    428323    auth_user auth_user_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (user_id);
 B   ALTER TABLE ONLY public.auth_user DROP CONSTRAINT auth_user_pkey;
       public            pengzhen    false    219            ?           2606    428324 9   auth_group_permission auth_group_permission_group_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.auth_group_permission
    ADD CONSTRAINT auth_group_permission_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.auth_group(group_id) NOT VALID;
 c   ALTER TABLE ONLY public.auth_group_permission DROP CONSTRAINT auth_group_permission_group_id_fkey;
       public          pengzhen    false    215    3248    214            ?           2606    428329 >   auth_group_permission auth_group_permission_permission_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.auth_group_permission
    ADD CONSTRAINT auth_group_permission_permission_id_fkey FOREIGN KEY (permission_id) REFERENCES public.auth_permission(permission_id) NOT VALID;
 h   ALTER TABLE ONLY public.auth_group_permission DROP CONSTRAINT auth_group_permission_permission_id_fkey;
       public          pengzhen    false    3252    215    216            ?           2606    428339 /   auth_user_groups auth_user_groups_group_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_fkey FOREIGN KEY (group_id) REFERENCES public.auth_group(group_id) NOT VALID;
 Y   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_group_id_fkey;
       public          pengzhen    false    3248    214    217            ?           2606    428334 .   auth_user_groups auth_user_groups_user_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.auth_user(user_id) NOT VALID;
 X   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_user_id_fkey;
       public          pengzhen    false    217    3260    219            ?           2606    428349 <   auth_user_permission auth_user_permission_permission_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.auth_user_permission
    ADD CONSTRAINT auth_user_permission_permission_id_fkey FOREIGN KEY (permission_id) REFERENCES public.auth_permission(permission_id) NOT VALID;
 f   ALTER TABLE ONLY public.auth_user_permission DROP CONSTRAINT auth_user_permission_permission_id_fkey;
       public          pengzhen    false    218    3252    216            ?           2606    428344 6   auth_user_permission auth_user_permission_user_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.auth_user_permission
    ADD CONSTRAINT auth_user_permission_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.auth_user(user_id) NOT VALID;
 `   ALTER TABLE ONLY public.auth_user_permission DROP CONSTRAINT auth_user_permission_user_id_fkey;
       public          pengzhen    false    218    3260    219            Y      x?????? ? ?      S      x?????? ? ?      T      x?????? ? ?      U      x?????? ? ?      X      x?????? ? ?      V      x?????? ? ?      W      x?????? ? ?     