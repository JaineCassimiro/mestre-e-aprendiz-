defmodule Strongbox.Seeds do
  alias Strongbox.Repo
  alias Strongbox.User
  alias Strongbox.Crypto

  def seed_users do
    hashed_password = Crypto.hash_password("LUMIN")

    Repo.insert!(%User{
      username: "admin",
      password_hash: hashed_password
    })

    IO.puts("🔐 Usuário padrão 'admin' criado com senha '' (criptografada)")
  end
end

Strongbox.Seeds.seed_users()
