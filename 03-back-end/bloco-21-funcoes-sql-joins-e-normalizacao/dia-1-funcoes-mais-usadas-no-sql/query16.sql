-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

select ucase(concat(first_name, ' ', last_name)) from hr.employees;