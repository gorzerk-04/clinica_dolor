/**
 * Google Apps Script — recibir citas del formulario web en Google Sheets
 *
 * IMPORTANTE: Tras pegar o editar este código:
 * Implementar → Gestionar implementaciones → Nueva versión → Implementar
 */

const SHEET_NAME = 'Citas_Clínica_del_Dolor'
const SECRET_TOKEN = 'CAMBIA_ESTA_CLAVE_SECRETA'

function doGet() {
  return jsonResponse({
    ok: true,
    message: 'Script activo. El formulario web envía datos por POST.',
  })
}

function doPost(e) {
  try {
    const params = getParams(e)
    Logger.log('doPost params: %s', JSON.stringify(params))

    if (params.token !== SECRET_TOKEN) {
      Logger.log('Token inválido')
      return webResponse(false)
    }

    const nombre = (params.nombre || '').toString().trim()
    const email = (params.email || '').toString().trim()
    const telefono = (params.telefono || '').toString().trim()
    const especialidad = (params.especialidad || '').toString().trim()
    const fecha = (params.fecha || '').toString().trim()
    const mensaje = (params.mensaje || '').toString().trim()

    if (!nombre || !email || !telefono || !especialidad || !fecha) {
      return webResponse(false)
    }

    const sheet = getOrCreateSheet()
    ensureHeaders(sheet)

    sheet.appendRow([
      new Date(),
      nombre,
      email,
      telefono,
      especialidad,
      fecha,
      mensaje,
    ])

    Logger.log('Fila guardada en hoja: %s', SHEET_NAME)
    return webResponse(true)
  } catch (err) {
    Logger.log('Error: %s', err)
    return webResponse(false)
  }
}

/** Lee parámetros desde formulario POST (e.parameter o cuerpo urlencoded). */
function getParams(e) {
  var params = {}
  if (e && e.parameter) {
    params = Object.assign({}, e.parameter)
  }
  if (e && e.postData && e.postData.contents) {
    var type = (e.postData.type || '').toLowerCase()
    if (
      type.indexOf('application/x-www-form-urlencoded') !== -1 ||
      type.indexOf('text/plain') !== -1 ||
      type === ''
    ) {
      var parsed = parseUrlEncoded(e.postData.contents)
      params = Object.assign(parsed, params)
    }
  }
  return params
}

function parseUrlEncoded(contents) {
  var out = {}
  contents.split('&').forEach(function (pair) {
    var idx = pair.indexOf('=')
    if (idx === -1) return
    var key = decodeURIComponent(pair.substring(0, idx).replace(/\+/g, ' '))
    var val = decodeURIComponent(pair.substring(idx + 1).replace(/\+/g, ' '))
    out[key] = val
  })
  return out
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }
  return sheet
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Fecha registro',
      'Nombre',
      'Email',
      'Teléfono',
      'Especialidad',
      'Fecha preferida',
      'Mensaje',
    ])
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold')
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/** Respuesta HTML vacía para el iframe del formulario (evita popup con {"ok":true}). */
function webResponse(success) {
  const html =
    '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' +
    (success ? 'OK' : 'Error') +
    '</title></head><body></body></html>'
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(
    HtmlService.XFrameOptionsMode.ALLOWALL
  )
}

/** Ejecutar desde el editor (▶) para probar sin el sitio web. */
function testGuardarCita() {
  const e = {
    parameter: {
      token: SECRET_TOKEN,
      nombre: 'Prueba Test',
      email: 'prueba@test.com',
      telefono: '5512345678',
      especialidad: 'Medicina General',
      fecha: '2026-05-20',
      mensaje: 'Prueba desde Apps Script',
    },
  }
  const result = doPost(e)
  Logger.log(result.getContent())
}
