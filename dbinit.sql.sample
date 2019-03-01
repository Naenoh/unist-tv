begin;
create schema unisttv;
create table unisttv.matches(
    id serial primary key,
    playerone text not null,
    playertwo text not null,
    link text not null,
    upload_date date not null
);

create role web_anon nologin;
grant usage on schema unisttv to web_anon;
grant select on unisttv.matches to web_anon;
create role authenticator noinherit login password 'PASSWORD';
grant web_anon to authenticator;
commit;