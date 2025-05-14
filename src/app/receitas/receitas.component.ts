// receitas.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent {
  receitas = [
    {
      nome: 'Salmão Grelhado com Arroz Integral e Legumes',
      imagem: '/img/salmaogrelhado.jpeg',
      ingredientes: [
        'Salmão',
        'Arroz integral',
        'Legumes (cenoura, brócolis, abobrinha)',
        'Azeite',
        'Sal e pimenta a gosto'
      ],
      modoDePreparo:
        'Tempere o salmão com sal e pimenta, grelhe até o ponto desejado. Cozinhe o arroz integral e os legumes no vapor. Sirva tudo junto.'
    },
    {
      nome: 'Moqueca Baiana',
      imagem: '/img/moquecabaiana.jpeg',
      ingredientes: [
        'Peixe (robalo, cação, etc.)',
        'Cebola',
        'Pimentão',
        'Tomate',
        'Coentro',
        'Leite de coco',
        'Azeite de dendê',
        'Sal e pimenta a gosto'
      ],
      modoDePreparo:
        'Refogue a cebola, pimentão e tomate. Adicione o peixe, o leite de coco e o azeite de dendê. Cozinhe até o peixe estar pronto e sirva com arroz branco.'
    },
    {
      nome: 'Salada Šopska',
      imagem: '/img/salada.jpeg',
      ingredientes: [
        '2 tomates',
        '1 pepino',
        '1 pimentão verde',
        'Queijo feta ralado',
        'Azeite e salsinha a gosto'
      ],
      modoDePreparo:
        'Corte os vegetais em cubos, tempere com azeite e finalize com o queijo ralado por cima.'
    },
    {
      nome: 'Bibimbap Leve',
      imagem: '/img/coisa.jpeg',
      ingredientes: [
        '1 xícara de arroz integral',
        'Espinafre, cenoura e abobrinha salteados',
        '1 ovo cozido ou poché',
        'Molho de soja leve',
        'Gergelim torrado'
      ],
      modoDePreparo:
        'Monte o arroz em uma tigela, adicione os legumes, o ovo e tempere com molho e gergelim.'
    },
    {
      nome: 'Atkilt Wot',
      imagem: '/img/wat.jpeg',
      ingredientes: [
        '2 cenouras',
        '2 batatas',
        '1/2 repolho',
        'Cúrcuma, alho e gengibre',
        'Azeite e sal a gosto'
      ],
      modoDePreparo:
        'Refogue os temperos no azeite e cozinhe os legumes até ficarem macios. Sirva quente.'
    },
    {
      nome: 'Sopa de Beterraba (Barszcz)',
      imagem: '/img/sopa.jpeg',
      ingredientes: [
        '2 beterrabas',
        '1 cenoura',
        '1 batata',
        'Suco de limão, alho e pimenta preta',
        'Salsinha a gosto'
      ],
      modoDePreparo:
        'Cozinhe tudo até os legumes ficarem macios, tempere com limão e sirva morno ou frio.'
    }
  ];

  detalhesVisible = false;
  receitaSelecionada: any = null;

  mostrarDetalhes(receita: any) {
    this.receitaSelecionada = receita;
    this.detalhesVisible = true;
  }

  fecharDetalhes() {
    this.detalhesVisible = false;
  }

  sair() {
  localStorage.removeItem('token');
  window.location.href = '/home'; // ou '/login', dependendo da sua rota
}

}
