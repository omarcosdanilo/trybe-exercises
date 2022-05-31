-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.
SELECT
	  department_id,
    count(department_id) as total_funcionarios, 
    avg(salary)
from hr.employees
GROUP BY DEPARTMENT_ID
HAVING total_funcionarios > 10;