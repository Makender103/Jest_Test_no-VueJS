import Leiloeiro from '@/views/Leiloeiro'
import { mount } from '@vue/test-utils'
import { getLeilao, getLances } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')
const leilao = {
  produto: 'Livro da casa do código',
  lanceInicial: 50,
  descricao: 'Livro bem bacana sobre Vue'
}
describe('Leiloeiro inicia um leilão que não possui lance', () => {
  test('avisa quando não existem lances', async () => {
    getLeilao.mockResolvedValueOnce(leilao)
    getLances.mockResolvedValueOnce([])

    const wrapper = mount(Leiloeiro, {
      propsData: {
        id: 1
      }
    })

    await flushPromises()

    const alerta = wrapper.find('.alert-dark')
    expect(alerta.exists()).toBe(true)
  })
})

describe('um leiloiero exibe os lances existentes', () => {
  test('Não mostra o aviso de "sem lances" ', async () => {

  })
  test('Possui uma lista de lances', async () => {

  })
})

describe('um leiloiero comunica os valores de menor e maior lance', () => {
  test('Mostra o maior lance daquele leilão', async () => {

  })
  test('Mostra o menor lance daquele leilão', async () => {

  })
})
