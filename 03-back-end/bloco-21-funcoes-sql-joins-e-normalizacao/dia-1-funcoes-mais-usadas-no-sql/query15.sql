-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

select
	  EMPLOYEE_ID,
    FIRST_NAME,
    month(hire_date) `Hire month`
from hr.employees;