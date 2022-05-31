-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

select
	  FIRST_NAME,
    LAST_NAME,
    datediff(current_date(), HIRE_DATE) `tempo_de_empresa`
from hr.employees;