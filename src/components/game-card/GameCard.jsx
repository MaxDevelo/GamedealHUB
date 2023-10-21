import React from "react";
import "./gamecard.scss";

import test_product_image from "../../assets/img/test_product_image.jpg";
import PC from "../../assets/img/plateforms-logo/PC.png";
import PlayStation from "../../assets/img/plateforms-logo/PlayStation.png";
import WII from "../../assets/img/plateforms-logo/WII.png";
import XBOX from "../../assets/img/plateforms-logo/XBOX.png";

const GameCard = () => {
  return (
	<div class="game-card">
		<div class="badge">New</div>
        <div class="badge-plateform">
         <img src={PC} alt="" width="40" />
         <img src={XBOX} alt="" width="40" />
        </div>
		<div class="game-tumb">
			<img src={test_product_image} alt="" />
		</div>
		<div class="game-details">
			<span class="game-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="game-bottom-details">
				<div class="game-price"><small>$96.00</small>$230.99</div>
				<div class="game-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
  );
};

export default GameCard;
