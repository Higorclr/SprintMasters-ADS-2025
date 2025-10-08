
# 1. História de Usuário

A Tabela 3 a seguir contém as Histórias de Usuárias elicitadas. 

<table>
    <thead>
        <tr style="background-color: purple; color: white" >
            <th style="border-style:solid;border-width:1px;text-align:center">ID</th>
            <th style="border-style:solid;border-width:1px;text-align:center">História de Usuário</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Critérios de aceitação</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Prioridade</th>
            <th style="border-style:solid;border-width:1px;text-align:center">RF/RNF relacionado</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Story Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US01</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Como cliente, eu quero ter acesso a um chat de suporte, para que eu consiga resolver dúvidas ou problemas rapidamente.
</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">
              <ol>                
                <li>Visibilidade: Um ícone de chat deve estar visível em todas as páginas.</li>
                <li>Funcionalidade: Ao clicar, o chat abre na mesma tela, permitindo o envio de mensagens.</li>
                <li>Feedback: O usuário recebe confirmação de envio e uma resposta automática.</li>
                <li>Offline: Se não houver atendentes, o chat informa o horário de atendimento e permite enviar um e-mail.</li>
              </ol>
            </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF05/RF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">3</td>
        </tr>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US02</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Como cliente, eu quero pagar com diferentes métodos (Cartão, PIX, Boleto), para que eu tenha flexibilidade na forma de pagamento.
</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">
              <ol>
                <li>Opções: Na tela de checkout, as opções "Cartão de Crédito", "PIX" e "Boleto" devem estar disponíveis.</li>
                <li>Cartão: Ao selecionar, exibe os campos necessários (número, nome, validade, CVV) e deve ter a opção de deixar o cartão cadastrado.</li>
                <li>PIX: Ao selecionar, gera um QR Code e um código "copia e cola".</li>
                <li>Boleto: Ao selecionar, gera um boleto para download ou visualizar.</li>
                <li>Confirmação: Pagamento aprovado leva a uma página de sucesso; pagamento recusado exibe erro e permite nova tentativa.</li>
              </ol>
            </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"> Alta </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF01</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">4</td>
        </tr>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US03</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Como cliente, eu quero ver avaliações e comentários de outros usuários, para que eu possa confiar mais na compra.</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">
              <ol>
                <li>Acesso: A página do produto deve ter uma seção de avaliações.</li>
                <li>Informações: A seção deve mostrar a nota média e os comentários de outros usuários.</li>
                <li>Conteúdo da Avaliação: Cada avaliação deve conter o nome do usuário, a nota, a data e o texto</li>
                <li>Sem Avaliações: Se não houver avaliações, uma mensagem informativa deve ser exibida.</li>
              </ol>
            </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">-</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">2</td>
        </tr>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US04</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Como usuário recorrente, eu quero fazer login rapidamente (inclusive com Google/Meta), para que eu não precise preencher meus dados toda vez.
</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">
              <ol>
                <li>Opções de Login: A tela de login deve ter campos para e-mail/senha e botões para "Entrar com Google" e "Entrar com Meta/Facebook".</li>
                <li>Login Social: Clicar nos botões sociais redireciona para a plataforma, e após autorização, o usuário é logado no site.</li>
                <li>Primeiro Acesso Social: Se for o primeiro login com uma conta social, o sistema cria um novo usuário automaticamente.</li>
                <li>Login Tradicional: O login com e-mail e senha deve funcionar corretamente, exibindo erro em caso de dados inválidos.</li>
              </ol>
            </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"> Alta </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">-</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">4</td>
        </tr>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US05</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Como funcionário de suporte, eu quero registrar chamados de atendimento (tickets) para acompanhar e resolver as solicitações dos clientes.
</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">
              <ol>
                <li>Dados do Chamado: Cada chamado deve ter, no mínimo, um número de identificação, a descrição do problema e um status (ex: "Aberto", "Em Andamento", "Resolvido").</li>
                <li>Gerenciamento: O funcionário deve poder atualizar o status e adicionar comentários internos em um chamado existente.</li>
                <li>Notificação: O cliente deve receber uma notificação por e-mail sempre que o status do seu chamado for alterado.</li>
              </ol>
            </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"> Alta </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">-</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">3</td>
        </tr>
        <tr>
            <span id="ustory-01"></span>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">US06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">Como administrador, eu quero cadastrar e editar produtos no catálogo para manter o site atualizado
com informações corretas.</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle" rowspan="1">
              <ol>
                <li>Acesso: O administrador deve ter acesso a uma área para cadastrar novos produtos e editar os existentes.</li>
                <li>Campos Obrigatórios: Para salvar um produto, é necessário preencher nome, descrição, preço, categoria e quantidade em estoque.</li>
                <li>Validação: O sistema não deve permitir salvar um produto se algum dos campos obrigatórios estiver em branco.</li>
                <li>Publicação Imediata: Após salvar, qualquer criação ou alteração no produto deve ser refletida instantaneamente no site para os clientes.</li>
              </ol>
            </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"> Alta </td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">-</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">2</td>
        </tr>
        <tr>
            
</table>

<div style="text-align: center">
<p>Tabela 3: História de Usuário</p>
</div>

## 5. Referências bibliográficas
