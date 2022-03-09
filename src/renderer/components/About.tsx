import classnames from "classnames";
import * as React from "react";

import icon from "../images/icon.png";

const About = () => {
  return (
    <div className={classnames("page")}>
      <h1>About</h1>
      <p>
        <img src={icon} width={400} />
      </p>
      <div id="lipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
          posuere odio. Nullam vulputate mauris ac ante accumsan fermentum.
          Fusce porttitor, neque sed dignissim ullamcorper, felis neque lobortis
          purus, nec malesuada felis eros sed nisi. Maecenas malesuada congue
          ipsum, id rutrum diam. Ut vehicula metus eget tincidunt laoreet. Sed
          luctus ipsum at accumsan viverra. Nunc condimentum nisl ultrices
          tempor euismod. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Praesent vitae odio eu
          orci semper rutrum sed sed nisl. Vivamus in purus at dolor sagittis
          bibendum ac vehicula turpis. Mauris et odio eget massa condimentum
          congue. Nullam sed lacus id massa varius porttitor. In eu urna in elit
          pretium laoreet.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed sit amet augue vitae mauris blandit
          facilisis. Fusce porttitor sapien nisl, eget gravida tortor gravida
          sit amet. Mauris a varius sapien, varius scelerisque ex. Nunc ultrices
          bibendum tortor. Cras nunc nibh, molestie et turpis in, dignissim
          lacinia nisl. Nunc et sem vitae dolor pellentesque laoreet id ut elit.
          Vivamus a porta felis, vitae accumsan mi.
        </p>
        <p>
          Integer eu velit sit amet ligula varius aliquam eget ac urna.
          Suspendisse ut dolor non orci maximus fringilla. Etiam neque ex,
          aliquam vitae faucibus tempor, blandit eget nibh. Etiam quis semper
          justo. Praesent at mollis nulla. Etiam lobortis nulla massa, et congue
          neque ultrices in. Suspendisse pulvinar odio id dolor dignissim, sit
          amet elementum est sollicitudin. Integer lectus lacus, aliquam at
          neque hendrerit, feugiat aliquam libero. Sed nulla eros, tincidunt et
          ipsum at, consectetur facilisis tortor. Sed a metus aliquet, fermentum
          mauris et, lobortis lacus. Vestibulum orci nunc, euismod in placerat
          in, efficitur sed velit. Mauris efficitur erat vitae vulputate
          condimentum. Integer ut elit in mi mattis varius ac vitae enim.
          Integer pulvinar quis massa non rhoncus. Integer leo nisi, pharetra ac
          urna at, ullamcorper mollis enim.
        </p>
        <p>
          Phasellus dignissim velit sit amet pharetra gravida. Nunc blandit erat
          vitae accumsan dictum. Donec eget bibendum nulla. Suspendisse vitae
          risus sit amet urna lacinia dapibus. Duis sagittis urna et dolor
          gravida pellentesque. Mauris iaculis, eros ut varius tempus, velit
          augue congue nisl, ut malesuada dolor erat eget ipsum. Vivamus ac
          vulputate lacus. Phasellus vitae scelerisque urna. Donec mauris velit,
          efficitur at convallis at, congue sed odio. Nullam vehicula arcu
          massa, sed rutrum lectus volutpat tincidunt. Integer ut lacus quis
          nisl gravida rhoncus sit amet ac risus. Donec vitae purus a risus
          finibus vestibulum. Phasellus iaculis scelerisque est, vitae
          vestibulum urna congue sit amet. Nulla facilisi. Aliquam vitae leo
          felis.
        </p>
        <p>
          Nullam pretium leo turpis, in fermentum erat rutrum non. Suspendisse
          in ex at odio commodo venenatis. Nam imperdiet vestibulum mi egestas
          sollicitudin. Morbi ut sem vel arcu tristique dignissim eget et
          libero. Vestibulum ac lectus felis. Nulla consequat urna eu lorem
          euismod porttitor. Pellentesque id purus nec nisi iaculis sodales ut
          et augue. In quis dignissim lorem.
        </p>
        <p>- Shakespeare</p>
      </div>
    </div>
  );
};

export default About;
