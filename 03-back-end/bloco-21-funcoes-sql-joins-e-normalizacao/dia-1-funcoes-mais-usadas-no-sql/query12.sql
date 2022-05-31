-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
select * from hr.employees
where char_length(first_name) >= 8;
