import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

const { Component } = require("react");

class Footer extends Component {
	render() {
		return (
			<footer id="footer" class="section section-grey">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="footer">
								<div class="">
									<Link class="logo" to="">
										<img src="./img/123.png" alt="" />
									</Link>
								</div>

								<p style = {{fontSize: 13, fontFamily: 'Tahoma'}}>Phương châm hoạt động của Pet Lover : “ Luôn đặt chất lượng lên hàng đầu “ quý khách yên tâm khi mua sắm tại cửa hàng vì 100% thức ăn chó mèo và các sản phẩm dinh dưỡng của chúng tôi được nhập khẩu trực tiếp từ nước Pháp . </p>

							</div>
						</div>

						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="footer">
							</div>
						</div>

						<div class="clearfix visible-sm visible-xs"></div>


						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="footer">
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<div class="footer">
								<h3 class="footer-header">Thông tin liên hệ</h3>
								<p style = {{fontSize: 13, fontFamily: 'Tahoma'}}>Hotline hỗ trợ tư vấn khách hàng, tiếp nhận phản hồi thắc mắc góp ý, và hỗ trợ các đại lý, đối tác của Pet lover.</p>
								<p style = {{fontSize: 13, fontFamily: 'Tahoma'}}>Mr Purfessor: 0123456789</p>

							</div>
						</div>
					</div>
					<hr />
				</div>
			</footer>
		)
	}
}

export default Footer;