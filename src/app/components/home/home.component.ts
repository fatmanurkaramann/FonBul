import { Component } from '@angular/core';
import { LandingModel } from '../models/landingModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  landings: LandingModel[] = [
    new LandingModel(
      'Fonbul+ Mobil Dünyasına Adım Atın!',
      'Hoş geldiniz! Fonbul+ Mobil ile şimdi fonlar parmaklarınızın ucunda! Mobil uygulamamızla, yatırım ve emeklilik fonlarını keşfedin ve analiz edin. Fon trendlerini yakından takip ederek, sizin için en uygun fonlara anında ulaşın. Minimalist tasarımı ve kullanıcı dostu arayüzü ile Fonbul+ Mobil, sizlere güvenli ve hızlı bir deneyim sunuyor!',
      [
        {
          url: 'assets/image.png',
          alt: 'Landing Image Alt',
        },
        {
          url: 'assets/image2.jfif',
          alt: '',
        },
      ]
    ),
    new LandingModel(
      'Fonları Keşfedin',
      'Robofon ile farklı temalar, stratejiler ve risk değerlere göre fonları karşılaştırın. Yeni fonları, fon getirilerini, popüler fonları, en az kaybettiren, en çok para girişi olan fonları ve fon kategorilerine göre fonlara ulaşın!',
      [
        {
          url: 'assets/image.jfif',
          alt: 'Landing Image Alt',
        },
        {
          url: 'assets/image (1).jfif',
          alt: 'Landing Image Alt',
        },
      ]
    ),
    new LandingModel(
      'Fonun Performansını Analiz Edin',
      'İncelemek istediğiniz fonu seçtiğinizde fonun risk değeri, volatilite, VRD, Sharpe ve getiri değerlerini beşgen grafik ile inceleyebilirsiniz. Beşgen grafikte çizili alanın Sharpe ve getiri bölümlerine yakın olması beklenir. Risk değeri, volatilite ve VRD değerlerine ne kadar yakınsa, fon o kadar olumsuz olarak değerlendirilir.',
      [
        {
          url: 'assets/fonbul1.png',
          alt: 'Landing Image Alt',
        },
        {
          url: 'assets/fonbul2.png',
          alt: 'Landing Image Alt',
        },
      ]
    ),
  ];
}
