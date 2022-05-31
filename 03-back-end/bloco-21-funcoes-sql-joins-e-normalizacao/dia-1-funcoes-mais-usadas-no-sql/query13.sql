-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
select
	EMPLOYEE_ID,
    FIRST_NAME,
    year(hire_date) `Hire_year`
from hr.employees