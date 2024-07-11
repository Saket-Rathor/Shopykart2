import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>

<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />

<footer class="footer">
  <div class="footer__container container grid">
    <div class="footer__content grid">
      <a class="footer__logo">Shopykart.</a>
      <ul class="footer__links">
        <li>
          <a  class="footer__link">About Me</a>
        </li>

        <li>
          <a  class="footer__link">Portfolio</a>
        </li>

        <li>
          <a  class="footer__link">Contact Me</a>
        </li>
      </ul>

      <div class="footer__social">
        <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
          <i class="ri-facebook-circle-fill"></i>
        </a>

        <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
          <i class="ri-instagram-fill"></i>
        </a>

        <a href="https://twitter.com/" target="_blank" class="footer__social-link">
          <i class="ri-twitter-x-line"></i>
        </a>

        <a href="https://www.linkedin.com/" target="_blank" class="footer__social-link">
          <i class="ri-linkedin-box-fill"></i>
        </a>
      </div>
    </div>

    <span class="footer__copy">
      &#169; Shopykart. 2024. All right reserved
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer
