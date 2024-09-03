import { Card, Row, Container, Col, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Card className='col-12'>
        <Card.Img variant='top' src='https://framerusercontent.com/images/NmbCyFQg0KGfOurDReOCcuWcT0A.png' />
      </Card>

      <h2 className='container my-5 text-center'>Tenemos lo último en tecnología</h2>

      <Container className='mt-5'>
        <Row>
          <div className='col-12 col-md-6 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Row className='g-0'>
                <Col className='col-md-8'>
                  <Card.Img className='img-fluid rounded-start' src='https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/support/laptop-user-guide/img/laptop.png' />
                </Col>
                <Col className='col-md-4'>
                  <Card.Body>
                    <Card.Title>Notebooks</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>

          <div className='col-12 col-md-6 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Row className='g-0'>
                <Col className='col-md-8'>
                  <Card.Img className='img-fluid rounded-start' src='https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/support/laptop-user-guide/img/laptop.png' />
                </Col>
                <Col className='col-md-4'>
                  <Card.Body>
                    <Card.Title>Celulares</Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>

        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <div className='col-12 col-sm-4 col-md-4 col-lg-4 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='https://assets.bosecreative.com/transform/607a7626-aaae-4e62-92e7-c2492622c6a5/QCHLE25_BlueDusk_001_RightFacing_RGB?quallity=100&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit' width='200px' alt='' />
                <Card.Title>Televisores</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-4 col-md-4 col-lg-4 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='https://assets.bosecreative.com/transform/607a7626-aaae-4e62-92e7-c2492622c6a5/QCHLE25_BlueDusk_001_RightFacing_RGB?quallity=100&io=width:816,height:667,transform:fit&io=width:816,height:667,transform:fit' width='200px' alt='' />
                <Card.Title>Audio</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-4 col-md-4 col-lg-4 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='https://www.canontiendaonline.cl/wcsstore/CCHCatalogAssetStore/pro_clens_eos5d_markiv_ef24_105usm_01.jpg' width='200px' alt='' />
                <Card.Title>Cámaras</Card.Title>
              </Card.Body>
            </Card>
          </div>

        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <div className='col-12'>
            <Card style={{ height: '10rem' }}>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <p><i class='fa-solid fa-user fa-3x' /></p>
                  <Card.Title>Inicia sesión para mejorar tu experiencia de compra</Card.Title>
                </div>
                <div>
                  <Button className='mx-2' variant='dark'>Iniciar sesión</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>

      <h2 className='text-center my-5'>Compartenos tu experiencia</h2>

      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center'>
          <div className='col-12 col-md-3 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='' width='200px' alt='avatar' />
                <Card.Title>Personaje1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-md-3 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='' width='200px' alt='avatar' />
                <Card.Title>Personaje2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-md-3 mb-3'>
            <Card style={{ height: '25rem' }}>
              <Card.Body>
                <Card.Img src='' width='200px' alt='avatar' />
                <Card.Title>Personaje3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-truck fa-3x' /></p>
                <Card.Title>Despacho gratis</Card.Title>
                <Card.Text>Por compras superiores $50.000</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-location-dot fa-3x' /></p>
                <Card.Title>Seguimiento</Card.Title>
                <Card.Text>Sigue tus pedidos</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-bag-shopping fa-3x' /></p>
                <Card.Title>Mis compras</Card.Title>
                <Card.Text>Haz seguimiento de tus compras</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-3'>
            <Card style={{ height: '20rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                <p><i class='fa-solid fa-credit-card fa-3x' /></p>
                <Card.Title>Pago Flexible</Card.Title>
                <Card.Text>Compra hasta en 24 cuotas</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </Row>
      </Container>

      <Container className='mt-5 pb-5 mb-5'>
        <Row>
          <div className='col-12'>
            <Card className='card' style={{ height: '10rem' }}>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <p><i class='fa-solid fa-user fa-3x' /></p>
                  <Card.Title>Crea tu cuenta y vende tus productos</Card.Title>
                </div>
                <div>
                  <Button className='mx-2' variant='dark'>Registrarse</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>

    </>
  )
}

export default Home
