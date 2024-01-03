import { Card } from "../../component/Card/Card";
import { contentLayout } from "../../styles/content-layout.css";
import { homeContainer } from "./HomeContainer.css";

export const HomeContainer = () => {
  return (
    <div className={`${homeContainer}`}>
      <div className={`${contentLayout}`}>
        <Card>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada lorem quis volutpat maximus. Proin eleifend tempor
            volutpat. Integer id elit sit amet ex fermentum aliquet. Vestibulum
            in dolor mi. Integer molestie, dui id egestas mollis, quam sem
            consectetur tellus, sed ultrices dui justo quis massa. Phasellus
            augue ipsum, facilisis vel bibendum et, placerat sagittis orci.
            Integer blandit cursus lectus sit amet porttitor. Sed pulvinar in
            leo vel viverra. Mauris accumsan dui vitae dolor porta rutrum. Sed
            id nulla a libero sollicitudin ultrices. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed malesuada lorem quis volutpat
            maximus. Proin eleifend tempor volutpat. Integer id elit sit amet ex
            fermentum aliquet. Vestibulum in dolor mi. Integer molestie, dui id
            egestas mollis, quam sem consectetur tellus, sed ultrices dui justo
            quis massa. Phasellus augue ipsum, facilisis vel bibendum et,
            placerat sagittis orci. Integer blandit cursus lectus sit amet
            porttitor. Sed pulvinar in leo vel viverra. Mauris accumsan dui
            vitae dolor porta rutrum. Sed id nulla a libero sollicitudin
            ultrices.
          </p>
        </Card>
      </div>
    </div>
  );
};
