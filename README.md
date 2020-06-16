# Recuperaçao de Senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com instruçoes de recuperaçao de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produçao;
- O envio de emails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar;

# Atualizar perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha;

**RN**

- O usuario nao pode alterar seu email para um email já utilizado;
- Para atualiza sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario deve confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificaçao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçoes nao lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificaçoes do prestador devem ser armazenas no MongoDB;
- As notificaçoes do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

- A notificaçao deve ter um status de lida ou nao lida;

# Agendamento de serviços

**RF**

- O usuario deve poder listar todos os prestadores de serviços cadastrados;
- O usuario deve poder listar os dias de um mes com horário pelo menos um horario disponível de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agedamentos deve estar disponíveis entre (8h as 18h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar serviçoes consigo mesmo;
