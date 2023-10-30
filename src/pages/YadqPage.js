import Header from "../Components/Header";
import ProjectLayout from "../Components/ProjectLayout";
import styles from '../styles/Global.module.scss'


export const YadqPage = ({ menu , link}) => {

  const description = (
    <> 
      <h1>YADQ: Yet Another Double Quaternion</h1>
      <p>
      Poses represent the position and orientation of a vector in a given reference frame. 
      </p>
      <p>
      The representation of these poses can be done in multiple ways, but it comprises of two entities: translation and rotation. Traditionally, translations are expressed by a vector with three elements (x, y, z). 
      As for the orientations, the problem is more challenging and the solutions depends on the mathematical tool selected; possible options are: euler angles, they depend on the parametrisation you selected and are prone to singularities; quaternions, a singularity-free representation that lose the physical meaning of the rotation in simple terms.
      </p>
      <p>
      Homogenous translations are often the method used to bind translation and orientation in a single entity. It is a 4x4 matrix with 16 elements in total, that can be reduced to 12 if we consider rigid transformations. The large number of parameter to keep in consideration while working with these object made roboticits explore other opportunities.
      </p>
      <p>
      Dual quaternions are another representation of poses, which exploits quaternions to represent both translation and orientations. The number of parameters with this formulation shrinks to 8 with a more performant code resulting from it.
      </p>
      <p>
        This library offers a C++17 implementation of quaternions and dual quaternions. It heavely leverages standard libraries to permit efficient and cross-platform portable code.
      </p>
      <p>Language: C++17 </p>
      <a href={link}>github code</a>                     
    </>);
  
    return (
      <>
        <Header menu={menu}/>
        <div className={styles.bodyContainer}>
          <ProjectLayout firstDiv_children={<img src="fabrik400.png" alt="" />} secondDiv_children={description} />
        </div>
      </>
    )
}
