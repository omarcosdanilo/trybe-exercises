-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT
	  last_name,
    HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';