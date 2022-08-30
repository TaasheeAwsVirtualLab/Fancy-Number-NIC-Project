import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:any;
  public loginForm !: FormGroup
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Ap', 'An', 'Br', 'Cg', 'Ch', 'Dd', 'Dl' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'States' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
  constructor(private formBuilder: FormBuilder, private myser:MyserviceService, private router: Router)  { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [""],
      password: [""],
      captureCode:[""]
    })
  }

  loginData(){
    this.myser.loginFormData(this.loginForm.value).subscribe(data=>
    {
      this.msg=data;
      console.log(this.msg);
      if(this.msg.result.status==="SUCCESS"){
        alert('login Successfully');
        this.router.navigate(['/home']);
      }
      else{
        alert('user not found');
      }
    },
    error=>{
      console.log(error);
    }
    )
  }
}
