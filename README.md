# Model ->
  ## Define a estrutura de uma entidade;
# Repository ->
  ## Manipulação dos dados relacionados à uma entidade;
# Service ->
  ## Único para cada funcionalidade;
  ## Responsável pelas regras de negócio;

# SOLID
## S -> Single Responsability Principle;
## D -> Dependecy Inversion Principle -> Receber o repositório pelo constructor p/ não instanciar um novo a cada vez que se chama o service;
