/*

--INDICES:
--Criando Indice para CEP já, por ser a forma de localização da rua e bairo é eficiente ter para CEP:
CREATE INDEX clienteCEP
on pra.Pedido (CPF_Cliente)
--Criando Indice para numCasa já que é a localização exata combinada com CEP:
CREATE INDEX clienteNumCasa
on pra.pedido (numCasa)


*/
--Criação dos TRIGGERS
--Criação das Views

    CREATE VIEW pra.quantasVendasProdutoX
        @idPr smallint
    AS
        SELECT
            f.fFirNome+' '+f.fUltNome as 'Funcionário', COUNT(*) as 'Vendas'
        from
        pra.Pedido as P join pra.Funcionario as F on F.idFunc = P.idFunc
        WHERE
            p.idVenda =@idPr


CREATE OR ALTER PROCEDURE pra.qtdProduto
    @idProduto smallint
AS BEGIN
    if exists (SELECT idProd from pra.Produto as p WHERE p.idProd = @idProduto)
    begin
        
    end
    else
    begin
        RAISERROR ('idProduto não existe',16,2)
    end
END






/*
    CREATE VIEW pra.quantasVendasProdutoX
    AS
        SELECT
            f.fFirNome+' '+f.fUltNome as 'Funcionário', COUNT(*) as 'Vendas'
        from
        pra.Pedido as P join pra.Funcionario as F on F.idFunc = P.idFunc
        WHERE
            p.idVenda =@idPr



/*
--Criação dos Stored Procedures
--INSERIR
--Recebe como parametro os valores para incluir o funcionário
CREATE or ALTER PROCEDURE pra.inserindoFuncionario
    @idFunc char(3), @fFirNome varchar(15),@fMeioNome char(1),@fUltNome varchar(15),
    @dataNacimento date,@salario int, @nivelPrestigio tinyint
as 
BEGIN   --Caso não exista um funcionário com o id apresentado inserir
    if NOT exists (Select idFunc from pra.Funcionario where idFunc = @idFunc)
        begin
            insert into pra.Funcionario values (@idfunc, @fFirNome,@fMeioNome,@fUltNome,@dataNacimento,@salario,@nivelPrestigio)
            if @@ERROR <>0
            BEGIN
                declare @Mensagem NVARCHAR
                SELECT @Mensagem = ERROR_MESSAGE()
                RAISERROR ('Erro ao incluir um empregado: %s', @Mensagem,16,2)
            END
        end
    else -- Caso houver anuncie o ERRO
        RAISERROR ('id de Funcionário já existe no banco de Dados, ARRUME!!',16,2)
END



--EXCLUIR
CREATE or ALTER PROCEDURE pra.excluirFuncionario
    @idFunc char(3)
as 
BEGIN   --Caso  exista um funcionário com o id apresentado excluir
    if  exists (Select idFunc from pra.Funcionario where idFunc = @idFunc)
        begin
            DELETE From pra.funcionario WHERE idFunc = @idFunc
            if @@ERROR <>0
            BEGIN
                declare @Mensagem NVARCHAR
                SELECT @Mensagem = ERROR_MESSAGE()
                RAISERROR ('Erro ao excluir um empregado: %s', @Mensagem,16,2)
            END
        end
    else -- Caso houver anuncie o ERRO
        RAISERROR ('id de Funcionário não existe no banco de Dados, ARRUME!!',16,2)
END 

CREATE OR ALTER PROCEDURE pra.alteraSalario
    @idFunc char(3), @salario int
AS
BEGIN
    if exists (select idFunc from pra.Funcionario WHERE idFunc =@idFunc)
    begin
        update pra.funcionario set salario = @salario where idFunc = @idFunc
            if @@ERROR <>0
                BEGIN
                    declare @Mensagem NVARCHAR
                    SELECT @Mensagem = ERROR_MESSAGE()
                    RAISERROR ('Erro ao alterar salario:  %s', @Mensagem,16,2)
                END
    end
    else
        RAISERROR ('id de Funcionário não existe no banco de Dados, ARRUME!!',16,2)
END

*/