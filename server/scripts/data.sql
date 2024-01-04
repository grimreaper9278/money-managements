insert into transaction_type (name) values ('ADD');
insert into transaction_type (name) values ('MINUS');

insert into transactions (amount, user_id, title, type_id) values (500, 1, 'خرید مرغ', 2);
insert into transactions (amount, user_id, title, type_id) values (400, 1, 'خرید گوشت', 2);
