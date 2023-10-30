import { Component } from '@angular/core';
import { LandingModel } from '../models/landingModel';
import { style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  landings: LandingModel[] = [
    new LandingModel(
      '',
      'Fonbul+ Mobil Dünyasına Adım Atın!',
      'Mobil uygulamamızla, yatırım ve emeklilik fonlarını keşfedin ve analiz edin.',
      'Minimalist tasarımı ve kullanıcı dostu arayüzü ile Fonbul+ Mobil, sizlere güvenli ve hızlı bir deneyim sunuyor!',
      'assets/fonbul.png',
      ''
    ),
    new LandingModel(
      'feature',
      'Fonları Keşfedin',
      '',
      'Robofon ile farklı temalar, stratejiler ve risk değerlere göre fonları karşılaştırın.Yeni fonları, fon getirilerini, popüler fonları, en az kaybettiren, en çok para girişi olan fonları ve fon kategorilerine göre fonlara ulaşın!Robofon ile fonları temalara, stratejilere ve risk değerlerine göre karşılaştırabilir, istediğiniz kriterlere uygun fonlara kolayca ulaşabilirsiniz. Fonların risk değeri, volatilite, getiri ve sharpe değerlerini görsel olarak inceleyebilir, fiyat grafikleriyle fonun fiyat trendini takip edebilirsiniz.  Fon getirilerini günlük, haftalık, aylık, 3 aylık, 6 aylık ve yıllık olarak görüntüleyebilir, fonun varlık gruplarını fon stratejisini detaylı olarak inceleyebilirsiniz. İstediğiniz fonları favorilerinize ekleyebilir ve kolayca ulaşabilirsiniz. Fonlarla ilgili bilgilendirici makale ve video içerikleri ve daha fazlası Fonbul+ Mobilde! ',

      'assets/fonbul.png',

      'flex-direction: row-reverse;display: flex;background: rgb(187, 226, 236);background: linear-gradient(90deg,rgba(187, 226, 236, 1) 0%,rgba(228, 242, 245, 1) 6%,rgba(239, 246, 247, 1) 91%,rgba(187, 226, 236, 1) 100%);'
    ),

  ];
}
