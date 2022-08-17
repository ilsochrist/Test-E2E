import {
    jest,
    expect,
    test,
    describe,
  } from '@jest/globals'

  import superTest from 'supertest'
  import Server from '../../src/server.js'
  
  describe('API E2E Test Suite', () => {
    
    test('POST /  - should save an item and return ok', async () => {
      const response = await superTest(Server)
      .post('/')
      .send({
        nome: 'ilsochrist',
        age: 27
      })
      const expectedResponse = ({ ok: 1 })
      expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
    })
    
    test('GET /  - should return an array', async () => {
      const response = await superTest(Server)
      .get('/')
      const data = JSON.parse(response.text)
      expect(data).toBeInstanceOf(Array)
      expect(data.length).toBe(1)
    })

    test('DELETE /  - delete all database', async () => {
      await superTest(Server)
        .delete('/')
        .expect(200);
    })
  })
