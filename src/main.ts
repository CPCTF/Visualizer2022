import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera } from 'three'
import './style.css'
import { Visualizer } from './Visualizer'

const camera = new PerspectiveCamera()

camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)

const visualizer = new Visualizer(camera)
visualizer.add(new Mesh(new BoxGeometry(), new MeshBasicMaterial({color: 'black'})))
