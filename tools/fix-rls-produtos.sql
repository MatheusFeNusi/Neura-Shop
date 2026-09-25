-- ============================================================
-- WattWheel — corrige RLS da tabela produtos para o painel admin
-- Execute no SQL Editor do Supabase (Dashboard -> SQL Editor -> New query)
-- A tabela 'produtos' ainda pode ser lida por todos (anon),
-- mas escrita passa a exigir o login do painel (authenticated).
-- ============================================================

-- 1) Garante permissao de leitura para visitantes (anon)
DROP POLICY IF EXISTS "produtos_select_anon" ON public.produtos;
CREATE POLICY "produtos_select_anon"
  ON public.produtos FOR SELECT
  TO anon, authenticated
  USING (true);

-- 2) Escrita liberada apenas para usuarios LOGADOS no painel (authenticated)
DROP POLICY IF EXISTS "produtos_insert_auth" ON public.produtos;
CREATE POLICY "produtos_insert_auth"
  ON public.produtos FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "produtos_update_auth" ON public.produtos;
CREATE POLICY "produtos_update_auth"
  ON public.produtos FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "produtos_delete_auth" ON public.produtos;
CREATE POLICY "produtos_delete_auth"
  ON public.produtos FOR DELETE
  TO authenticated
  USING (true);

-- 3) Grants de seguranca explicitos (caso o default do projeto os tenha revogado)
GRANT SELECT ON public.produtos TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.produtos TO authenticated;