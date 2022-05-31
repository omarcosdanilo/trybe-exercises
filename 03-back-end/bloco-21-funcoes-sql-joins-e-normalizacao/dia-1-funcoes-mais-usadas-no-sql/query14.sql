-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

select
	  EMPLOYEE_ID,
    FIRST_NAME,
    day(hire_date) `Hire day`
from hr.employees;