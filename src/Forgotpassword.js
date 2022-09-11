import React,{useEffect} from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate, Outlet, } from 'react-router-dom';


function Forgotpassword(){
    return (
            <>
            <div class="container">
<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                <p class="mb-4">We get it, stuff happens. Just enter your email address below
                                    and we'll send you a link to reset your password!</p>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."/>
                                </div>
                                <Link to="/Login">
                                    <a class="btn btn-primary btn-user btn-block">Reset Password</a>
                                </Link>  
                                </form>
                            <hr/>
                         
                        <div class="text-center">
                            <Link to="/Register">
                            <a class="small">Create an Account!</a>
                         </Link>   
                        </div>
                        <div class="text-center">
                        <Link to="/Login">
                            <a class="small">Already have an account? Login!</a>
                         </Link>   
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
            </>

    );
}

export default Forgotpassword;