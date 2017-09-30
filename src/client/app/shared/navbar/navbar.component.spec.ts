import { RouterTestingModule } from '@angular/router/testing'
import { NavbarComponent } from './navbar.component'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { INavbarService, NavbarService } from './navbar.service'
import { Component } from '@angular/core'
import { MdButtonModule, MdMenuModule } from '@angular/material'
import '../../../operators'

describe(NavbarComponent.name, () => {
  let fixture: ComponentFixture<NavbarComponent>
  let navbarService: INavbarService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MdButtonModule, MdMenuModule],
      declarations: [NavbarComponent, TestComponent],
      providers: [NavbarService]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent)
    navbarService = TestBed.get(NavbarService)
  })

  afterEach(() => {
    TestBed.resetTestingModule()
  })

  test.skip('should compile', async(() => {
    fixture.detectChanges()
    expect(fixture.nativeElement).toBeDefined()
    expect(fixture.nativeElement).toMatchSnapshot()
  }))
})

@Component({
  selector: 'test-component',
  template: '<pm-navbar></pm-navbar>'
})
class TestComponent { }
