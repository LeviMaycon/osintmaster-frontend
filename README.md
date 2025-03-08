# OSINTMaster Frontend

**OSINTMaster Frontend** é a interface de usuário para a coleção de ferramentas de **OSINT** (Open Source Intelligence) desenvolvidas para facilitar a coleta e análise de informações. Esta interface permite acessar ferramentas como o **Scanner IP** e outras que serão adicionadas futuramente.

![image](https://github.com/user-attachments/assets/ff9e7754-c53c-4082-8ff4-e51adf1c9a98)


## 📦 Tecnologias Utilizadas

- **Framework**: Angular 19+
- **Estilização**: CSS Puro
- **Comunicação**: HTTP para comunicação com o backend OSINTMaster

## 🚀 Instalação

### Pré-requisitos

Antes de começar, verifique se você tem as seguintes dependências instaladas:

- [Node.js](https://nodejs.org/) (recomendado LTS)
- [Angular CLI](https://angular.io/cli)

### Passos para Configuração

#### 1. Clonando o repositório

Clone o repositório em sua máquina local:

```bash
git clone https://github.com/LeviMaycon/osintmaster-frontend.git
```

#### 2. Instalando Dependências

Navegue até a pasta do projeto e instale as dependências:

```bash
cd osintmaster-frontend
npm install
```

#### 3. Configuração do Ambiente

Crie um arquivo `environment.ts` na pasta `src/environments/` com as seguintes variáveis:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api' // URL do backend Django
};
```

#### 4. Executando o Frontend

```bash
ng serve
```

O aplicativo estará disponível em `http://localhost:4200/`.

## 🛠️ Funcionalidades da Interface

### Scanner IP

A interface do Scanner IP permite:

- Inserir e validar endereços IP
- Visualizar resultados de varreduras com informações detalhadas
- Gerar relatórios exportáveis
- Histórico de análises anteriores

## 🔗 Integração com Backend

Este frontend se comunica com o [OSINTMaster Backend](https://github.com/LeviMaycon/osintmaster-backend) através de APIs REST. Certifique-se de ter o backend configurado e em execução para utilizar todas as funcionalidades.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o projeto
2. Crie sua branch de funcionalidade (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através de:
- GitHub: [LeviMaycon](https://github.com/LeviMaycon)
