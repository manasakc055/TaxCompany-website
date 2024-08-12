<template>
    <!-- Service -->
    <div class=" service-sec1 d-flex align-items-center">
        <div class="container">
            <div class="row p-2">
                <div>
                    <RouterLink class="routlink" to="/">Home page</RouterLink> <i class="bi bi-chevron-right"></i>
                    <RouterLink class="routlink" to="/sub">Tax information</RouterLink>
                </div>
                <h1 class="my-3 ">Tax information</h1>
                <p>with over 10 years of experience helping
                    busineto fi d<br>comprehensive solution
                </p>
            </div>
        </div>
    </div>
    <!-- Service-section-2 -->
    <div class=" service-sec2 d-flex align-items-center my-5">
        <div class="container">
            <div class="row ">
                <!-- col2 -->
                <div class="col-sm-3  ps-1">
                    <div class="position-sticky top-0">
                        <h3>About Tax</h3>
                        <hr />
                        <ul>
                            <li> <RouterLink to="/sub/:id" >What is Tax?</RouterLink></li>
                            <li>Direct Tax in India</li>
                            <li>Difference between Direct and Indirect Taxes</li>
                            <li> Goods and Service Tax(GST)</li>
                            <li> Capital Gains Tax(CGT)</li>
                            <li>Capital Gain Tax on Shares</li>
                            <li>Advance Tax</li>
                            <li> Income Tax for FY 2017-18 |Check Slab Rates,Calculation & News</li>
                        </ul>

                        <div class="row">
                        <div class="container">
                            <form class="f" href="#">
                                <div class="send-form">
                                    <h4>Contact Us</h4>

                                    <input type="text" placeholder="Name*">
                                    <input type="text" placeholder="Phone*">
                                    <input type="text" placeholder="Email*">
                                    <input type="text" placeholder="Message*" class="msg">
                                    <button type="submit">Submit Now</button>
                                </div>

                            </form>
                        </div>

                    </div>
                    </div>
                    <!-- <div>
                        <h3>Management Consultancy</h3>
                        <hr />
                        <ul>
                            <li>Firm Registrations</li>
                            <li>Company Registraions</li>
                            <li>GST Registration</li>
                            <li>Labour Licence</li>
                            <li>PF</li>
                            <li>ESI</li>
                        </ul>
                    </div> -->
                    <!-- form -->
                    

                </div>
                <!-- col1 -->
                <div class="col-sm-9 ps-5 my-4">
                    <!--row 1-->
                    <div class="row R1">
                        <p class="mini-h mb-0 ">Services</p>
                        <h2 class="pb-2"> What is tax?</h2>
                        <p>Taxes are levied by governments on their citizens to generate income for undertaking projects
                            to boost the economy of
                            the country and to raise the standard of living of its citizens. The authority of the
                            government to levy tax in India
                            is derived from the Constitution of India, which allocates the power to levy taxes to the
                            Central and State governments.
                            All taxes levied within India need to be backed by an accompanying law passed by the
                            Parliament or the State Legislature.
                        </p>
                        <p>
                            Over that time, we have grown from a single-person firm to California's best and
                            most trusted tax firm <b>processing</b> more than 10,000 tax returns annually.
                            We serve clients across not just Los Angeles and California, but nationally.
                        </p>
                        <div class="sub-heads py-2">
                            <h5>Types of Taxes:</h5>
                            <p>Taxes are of two distinct types, direct and indirect taxes. The difference comes in the
                                way these taxes are implemented.
                                Some are paid directly by you, such as the dreaded income tax, wealth tax, corporate tax
                                etc. while others are indirect
                                taxes, such as the value added tax, service tax, sales tax, etc.
                            </p>
                            <ol>
                                <li>Direct Taxes</li>
                                <li>Indirect Taxes</li>
                            </ol>
                            <p>But, besides these two conventional taxes, there are also other taxes that have been
                                brought
                                into effect by the Central Government to serve a particular agenda.
                                ‘Other taxes’ are levied on both direct and indirect taxes such as the
                                recently introduced Swachh Bharat Cess tax, Krishi Kalyan Cess tax,
                                and infrastructure Cess tax among others.
                            </p>
                        </div>
                    </div>
                    <!--row 2-->
                    <div class="row R2">
                        <h5>1. Direct Tax:</h5>
                        <p>Direct tax, as stated earlier, are taxes that are paid directly by you.
                            These taxes are levied directly on an entity or an individual and cannot be transferred onto
                            anyone else.
                            One of the bodies that overlooks these direct taxes is the <b> Central Board of Direct Taxes
                                (CBDT)</b> which is a part of the Department of Revenue.
                            It has, to help it with its duties, the support of various acts that govern various aspects
                            of direct taxes.
                        </p>
                        <p>Some of these acts are:</p>
                        <div class="R2-list">
                            <ul>
                                <li>Income Tax Act:</li>
                            </ul>
                            <p>
                                This is also known as the IT Act of 1961 and sets the rules that govern income tax in
                                India.
                                The income, which this act taxes, can come from any source like a business, owning a
                                house
                                or property, gains received from investments and salaries, etc.
                                This is the act that defines how much the tax benefit on a fixed deposit or a life
                                insurance
                                premium will be.
                                It is also the act that decides how much of your income can you save through investments
                                and
                                what the slab for the income tax will be.
                            </p>
                            <ul>
                                <li>Income Tax Act:</li>
                            </ul>
                            <p>
                                The Wealth Tax Act was enacted in 1951 and is responsible for the taxation related to
                                the
                                net
                                wealth of an individual, a company or a Hindu Unified Family.
                                The simplest calculation of wealth tax was that if the net wealth exceeded Rs. 30 lakhs,
                                then 1% of the amount that exceeded Rs. 30 lakhs was payable as tax. It was abolished in
                                the
                                budget announced in 2015.
                                It has since been replaced with a surcharge of 12% on individuals that earn more than
                                Rs.
                                1 crore per annum. It is also applicable to companies that have a revenue of over Rs. 10
                                crores per annum.
                                The new guidelines drastically increased the amount the government would collect in
                                taxes as
                                opposed the amount they would collect through the wealth tax.
                            </p>
                            <ul>
                                <li>Gift Tax Act:</li>
                            </ul>
                            <p>The Gift Tax Act came into existence in 1958 and stated that if an individual received
                                gifts,
                                monetary or valuables, as gifts, a tax was to be to be paid on such gifts.
                                The tax on such gifts was maintained at 30% but it was abolished in 1998.
                                Initially if a gift was given, and it was something like property, jewellery, shares
                                etc. it
                                was taxable.
                                According to the new rules gifts given by family members like brothers, sister, parents,
                                spouse, aunts and uncles are not taxable.
                                Even gifts given to you by the local authorities is exempt from this tax. How the tax
                                works
                                now is that if someone, other than the exempt entities,
                                gifts you anything that exceeds a value of Rs. 50,000 then the entire gift amount is
                                taxable.
                            </p>
                            <ul>
                                <li>Expenditure Tax Act:</li>
                            </ul>
                            <p>This is an act that came into existence in 1987 and deals with the expenses you,
                                as an individual, may incur while availing the services of a hotel or a restaurant.
                                It is applicable to all of India except Jammu and Kashmir.
                                It states that certain expenses are chargeable under this act
                                if they exceed Rs. 3,000 in the case of a hotel and all expenses incurred in a
                                restaurant.
                            </p>
                            <ul>
                                <li>Interest Tax Act:</li>
                            </ul>
                            <p>The Interest Tax Act of 1974 deals with the tax that was payable on interest earned in
                                certain specific situations.
                                In the last amendment to the act it was stated that the act does not apply to interest
                                that
                                was earned after March 2000.
                            </p>
                            <p>Below are some examples for all the different types of direct taxes</p>
                        </div>
                    </div>

                    <!--row 3-->
                    <div class="row R3">
                        <p><b>Examples of Direct Taxes:</b></p>
                        <p>These are some of the direct taxes that you pay</p>
                        <h5>1. Income Tax:</h5>
                        <p>This is one of the most well-known and least understood taxes.
                            It is the tax that is levied on your earning in a financial year. There are many facets to
                            income tax,
                            such as the tax slabs, taxable income, tax deducted at source (TDS), reduction of taxable
                            income, etc.
                            The tax is applicable to both individuals and companies.
                            For individuals, the tax that they have to pay depends on which tax bracket they fall in.
                            This bracket or slab determines the tax to be paid based on the annual income of the
                            assessee and
                            ranges from no tax to 30% tax for the high income groups.
                        </p>
                        <p>
                            The government has fixed different taxes slabs for varied groups of individuals,
                            namely general taxpayers, senior citizens (people aged between 60 to 80,
                            and very senior citizens (people aged above 80).
                        </p>
                        <span><b>New Income Tax Slab Rates for FY 2017-18 (AY 2018-19)</b></span>
                        <h5 class="py-3 fs-5">Income tax slab for individual tax payers & HUF (less than 60 years old) (both men & women)</h5>
                        <!--table1-->
                        <table border="1">
                            <tr>
                                <th>Income Tax Slab</th>
                                <th>Tax Rate</th>
                            </tr>
                            <tr>
                                <td>Income up to Rs. 2,50,000*</td>
                                <td>No Tax </td>
                            </tr>
                            <tr>
                                <td>Income from Rs. 2,50,000 – Rs. 5,00,000 </td>
                                <td>5% </td>
                            </tr>
                            <tr>
                                <td>Income from Rs. 5,00,000 – 10,00,000</td>
                                <td> 20%</td>
                            </tr>
                            <tr>
                                <td>Income more than Rs. 10,00,000 </td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>
                                    Surcharge: 10% of income tax, where total income is between Rs. 50 lakhs and Rs.1
                                    crore. 15% of income tax, where total income exceeds Rs. 1 crore.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cess: 3% on total of income tax + surcharge.
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    * Income upto Rs. 2,50,000 is exempt from tax if you are less than 60 years old.
                                </td>
                            </tr>
                        </table>
                        <div class="card">
                            <h5>Credit Score of 750 = Easy approval on Loans/Credit Card!</h5>
                            <div class="card-body">
                                <h5>Check now in less than 3 min!</h5>
                                <button type="submit">Check for Free</button>
                            </div>
                            <p>Courtesy Source : BankBazaar</p>
                        </div>


                        <!-- <div class="">
                            <p><i class="fa-regular fa-circle-check"></i> Preparation and filing of Tax returns</p>
                            <p><i class="fa-regular fa-circle-check"></i> Preparations and drafting of grounds of
                                appeals and representing before different appellate authorities</p>
                            <p><i class="fa-regular fa-circle-check"></i> Advising on tax settlement and recovery
                                proceedings</p>
                            <p><i class="fa-regular fa-circle-check"></i> Tax planning and advice for individuals,firms
                                and corporate bodies </p>
                            <p><i class="fa-regular fa-circle-check"></i> Tax advice to foreign investors investing in
                                India</p>
                            <p><i class="fa-regular fa-circle-check"></i> Tax advice to foreigners working in India</p>
                            <p><i class="fa-regular fa-circle-check"></i> Advice on Transfer pricing structure.</p>
                        </div> -->
                    </div>
                    <!--row 3 a-->
                    <div class="row R3">
                        <h5>Income tax slab for individual tax payers & HUF (60 years old or more but less than 80 years
                            old) (both men & women)</h5>
                        <!--table2-->
                        <table border="1">
                            <tr>
                                <th>Income Tax Slab</th>
                                <th>Tax Rate</th>
                            </tr>
                            <tr>
                                <td>Income up to Rs. 3,00,000* </td>
                                <td>No Tax </td>
                            </tr>
                            <tr>
                                <td>Income from Rs. 3,00,000 – Rs. 5,00,000</td>
                                <td>5% </td>
                            </tr>
                            <tr>
                                <td>Income from Rs. 5,00,000 – 10,00,000</td>
                                <td> 20%</td>
                            </tr>
                            <tr>
                                <td>Income more than Rs. 10,00,000 </td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>
                                    Surcharge: 10% of income tax, where total income is between Rs. 50 lakhs and Rs.1
                                    crore.
                                    15% of income tax, where total income exceeds Rs.1 crore.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cess: 3% on total of income tax + surcharge.
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    * Income up to Rs. 3,00,000 is exempt from tax if you are more than 60 years but
                                    less than 80 years of age.
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!--row 3 b-->
                    <div class="row R3">
                        <h5>Income tax slab for super senior citizens (80 years old or more) (both men & women)</h5>
                        <!--table2-->
                        <table border="1">
                            <tr>
                                <th>Income Tax Slab</th>
                                <th>Tax Rate</th>
                            </tr>
                            <tr>
                                <td>Income up to Rs. 2,50,000* </td>
                                <td>No Tax </td>
                            </tr>
                            <tr>
                                <td>Income up to Rs. 5,00,000*</td>
                                <td>No Tax</td>
                            </tr>
                            <tr>
                                <td>Income from Rs. 5,00,000 – 10,00,000</td>
                                <td> 20%</td>
                            </tr>
                            <tr>
                                <td>Income more than Rs. 10,00,000 </td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>
                                    Surcharge: 10% of income tax, where total income is between Rs. 50 lakhs and Rs.1
                                    crore.
                                    15% of income tax, where total income exceeds Rs.1 crore.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cess: 3% on total of income tax + surcharge.
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    * Income up to Rs. 5,00,000 is exempt from tax if you are more than 80 years but
                                    less than 80 years of age.
                                </td>
                            </tr>
                        </table>
                        <p>Below, you will find a few tables that list out Income Tax Slab Rates for FY 2016-17 (AY
                            2017-18)
                            These income tax slab rates are also applicable for :FY 2015-16 (AY 2016-17) FY 2014-15 (AY
                            2015-16) .
                        </p>
                        <!--table3-->

                        <div class="table-heading">
                            <span>Income Tax Slab for General Taxpayers :</span>
                        </div>
                        <table border="1">
                            <tr>
                                <th>Income Tax Slab</th>
                                <th>Tax Rate</th>
                            </tr>
                            <tr>
                                <td>0 - 2,50,000 </td>
                                <td>No Tax </td>
                            </tr>
                            <tr>
                                <td>2,50,001 - 5,00,000 </td>
                                <td>10% tax</td>
                            </tr>
                            <tr>
                                <td>5,00,001 - 10,00, 000 </td>
                                <td> 20% tax</td>
                            </tr>
                            <tr>
                                <td>Above 10,00,000 </td>
                                <td>30% tax</td>
                            </tr>


                        </table>
                        <!--table4-->

                        <div class="table-heading">
                            <span>Income Tax Slab for Senior Citizens (Ages between 60 to 80 years) ::</span>
                        </div>
                        <table border="1">
                            <tr>
                                <th>Income Tax Slab</th>
                                <th>Tax Rate</th>
                            </tr>
                            <tr>
                                <td>0 - 3,00,000 </td>
                                <td>No Tax </td>
                            </tr>
                            <tr>
                                <td>3,00,001 - 5,00,000 </td>
                                <td>10% tax</td>
                            </tr>
                            <tr>
                                <td>5,00,001 - 10,00, 000 </td>
                                <td> 20% tax</td>
                            </tr>
                            <tr>
                                <td>Above 10,00,000 </td>
                                <td>30% tax</td>
                            </tr>


                        </table>
                        <!--table5-->

                        <div class="table-heading">
                            <span>Income Tax Slab for Senior Citizens (Ages between 60 to 80 years) ::</span>
                        </div>
                        <table border="1">
                            <tr>
                                <th>Income Tax Slab</th>
                                <th>Tax Rate</th>
                            </tr>
                            <tr>
                                <td>0 - 5,00,000 </td>
                                <td>Nil</td>
                            </tr>
                            <tr>
                                <td>5,00,001 - 10,00, 000 </td>
                                <td>20% tax</td>
                            </tr>
                            <tr>
                                <td>Above 10,00,000 </td>
                                <td> 30% tax</td>
                            </tr>
                        </table>
                        <h5>2.Capital Gains Tax:</h5>
                        <p>This is a tax that is payable whenever you receive a sizable amount of money. It could be
                            from an investment or from the sale of a property. It is usually of two types,
                            short term capital gains from investments held for less than 36 months and long term capital
                            gains from investments held for longer than 36 months. The tax applicable for
                            each is also very different since the tax on short term gains is calculated based in the
                            income bracket that you fall in and the tax on long term gains is 20%.
                            The interest thing about this tax is that the gain doesn't always have to be in the form of
                            money.
                            It could also be an exchange in kind in which case the value of the exchange will be
                            considered for taxation.
                        </p>
                        <h5>3. Securities Transaction Tax:</h5>
                        <p>It’s no secret that if you know how to trade properly on the stock market, and trade in
                            securities, you stand to make a substantial amount of money. This too is a source of income
                            but it has its own tax which is known as the Securities Transaction Tax .
                            How this tax is levied is by adding the tax to the price of the share. This means that every
                            time you buy or sell shares, you pay this tax. All securities traded on the Indian stock
                            exchange have this tax attached to them.
                        </p>
                        <h5>4. Perquisite Tax:</h5>
                        <p>Perquisites are all the perks or privileges that employers may extend to employees.
                            These privileges may include a house provided by the company or a car for your use, given to
                            you by the company.
                            These perks are not just limited to big compensation like cars and houses, they can even
                            include things like compensation for fuel or phone bills.
                            How this tax is levied is by figuring out how that perk has been acquired by the company or
                            used by the employee.
                            In the case of cars, it may be so that a car provided by the company and used for both
                            personal and official purposes
                            is eligible for tax whereas a car used only for official purposes is not.
                        </p>
                        <h5>5. Corporate Tax:</h5>
                        <p>Corporate tax is the income tax that is paid by companies from the revenue they earn. This
                            tax also comes with a slab of its own that decides how much tax the company has to pay. For
                            example a domestic company, which has a revenue of less than Rs.
                            1 crore per annum, won’t have to pay this tax but one that has a revenue of more than Rs. 1
                            crore per annum will have to pay this tax. It is also referred to as a surcharge and is
                            different for different revenue brackets.
                            It is also different for international companies where the corporate tax may be 41.2% if the
                            company has a revenue of less than Rs. 10 million and so on.
                        </p>
                        <span>There are four different types of corporate tax. They are:</span>
                        <div class="R3-ul-list">
                            <ul>
                                <li>Minimum Alternative Tax:</li>
                            </ul>
                        </div>
                            
                        <p>Minimum Alternative Tax, or MAT, is basically a way for the Income Tax Department to get
                            companies to pay a minimum tax,
                            which currently stands at 18.5%. This form of tax was brought into effect through the
                            introduction of Section 115JA of the Income Tax Act.
                            However, companies involved in infrastructure
                            and power sectors are exempt from paying MAT.
                        </p>
                        <p>Once a company pays the MAT, it can carry the payment forward and set-off (adjust) against
                            regular tax payable during the subsequent
                            five-year period subject to certain conditions.
                        </p>
                        <div class="R3-ul-list">
                            <ul>
                                <li>Fringe Benefit Tax:</li>
                            </ul>
                        </div>
                        <p>Fringe Benefit Tax, or FBT, was a tax which applied to almost every fringe benefit an
                            employer provided to their employees.
                            In this tax, a number of aspects were covered. Some of them include:
                        </p>
                        <div class="R3-ol-list">
                           
                            <ol>
                                <li>
                                    Employer’s expense on travel (LTA), employee welfare, accommodation, and entertainment.
                                </li>
                                <li>
                                    Any regular commute or commute related expense provided by an employer.
                                </li>
                                <li>
                                    Employer’s contribution to a certified retirement fund.
                                </li>
                                <li>
                                    Employer Stock Option Plans (ESOPs).
                                </li>
                            </ol>
                        </div>

                        <p>
                            FBT was started under the Indian government’s stewardship from April 1, 2005. However,
                            the tax was later scrapped in 2009 by the-then Finance Minister Pranab Mukherjee during the
                            2009 Union Budget session.
                        </p>
                        <div class="R3-ul-list">
                            <ul>
                                <li>Dividend Distribution Tax:</li>
                            </ul>
                        </div>
                        <p>Dividend Distribution Tax was introduced after the end of 2007’s Union Budget. It is
                            basically a tax levied on companies
                            based on the dividend they pay to their investors. This tax is applicable on the gross or
                            net income
                            an investor receives from their investment. Currently, the DDT rate stands at 15%.
                        </p>
                        <div class="R3-ul-list">
                            <ul>
                                <li>Banking Cash Transaction Tax: </li>
                            </ul>
                        </div>
                        <p>Banking Cash Transaction Tax is yet another form of tax that
                            has been abandoned by the Indian government. This form of taxation was
                            operation from 2005-2009 until the then FM Pranab Mukherjee nullified the tax.
                            This tax suggested that every bank transaction (debit or credit) would be taxed at a rate of
                            0.1%.
                        </p>

                    </div>
                    <!--row 3 c-->
                    <div class="row R3">
                        <!-- indirect taxes-->
                        <h5>Indirect Tax:</h5>
                        <p>By definition, indirect taxes are those taxes that are levied on goods or services. They
                            differ from direct taxes because they are not levied on a person who pays them directly to
                            the government, they are instead levied on products and are collected by an intermediary,
                            the person selling the product.
                            The most common examples of indirect tax Indirect tax can be<b> VAT (Value Added Tax), Taxes
                                on Imported Goods, Sales Tax, etc </b>. These taxes are levied by adding them to the
                            price of the service or product which tends to push the cost of the product up.
                        </p>
                        <span>Examples of Indirect Taxes:</span>
                        <p> These are some of the common indirect taxes that you pay.</p>
                        <!-- exapmlea indirect taxes-->
                        <div class="indirect-taxes">
                            <span>1.Sales Tax:</span>
                            <p>As the name suggests, sales tax is a tax that is levied on the sale of a product.
                                This product can be something that was produced in India or imported and can even cover
                                services rendered.
                                This tax is levied on the seller of the product who then transfers it onto the person
                                who buys said product
                                with the sales tax added to the price of the product. The limitation of this tax is that
                                it can be levied only
                                ones for a particular product, which means that if the product is sold a second time,
                                sales tax cannot be applied to it.
                            </p>
                            <p>Basically, all the states in the country follow their own Sales Tax Act and charge a
                                percentage indigenous to themselves.
                                Besides this, a few states also levy other additional charges like turnover tax,
                                purchase tax, works transaction tax, and the like.
                                This is also the reason why sales tax is one of the largest revenue generators for
                                various state governments.
                                Also, this tax is levied under both central and state legislations.
                            </p>
                            <span>2.Service Tax:</span>
                            <p>Like sales tax is added to the price of goods sold in India,
                                so is service tax added to services provided in India.
                                In the reading of the budget 2015, it was announced that the service tax will be raised
                                from 12.36%
                                to 14%. It is not applicable on goods but on companies that provide services and is
                                collected every
                                month or once every quarter based on how the services are provided. If the establishment
                                is an individual
                                service provider then the service tax is paid only once the customer pays the bills
                                however, for companies
                                the service tax is payable the moment the invoice is raised, irrespective of the
                                customer paying the bill.
                            </p>
                            <p>An important thing to remember is that since the service at a restaurant is a combination
                                of the food, the waiter and the premises themselves,
                                it is difficult to pin point what qualifies for service tax. To remove any ambiguity, in
                                this regard, it has been announced that the service
                                tax in restaurants will be levied only on 40% of the total bill.
                            </p>
                            <!--2a   GST -->
                            <span>2a. GST - Goods and Service Tax:</span>
                            <p>The Goods and Services Tax (GST) is the largest reform in India’s indirect tax structure
                                since the market
                                started opening up about 25 years ago. The GST is a consumption-based tax, as it is
                                applicable where
                                consumption takes place. The GST is levied on value-added goods and services at each
                                stage of consumption in the supply chain.
                                The GST payable on the procurement of goods and services can be set off against the GST
                                payable on the supply of goods and services,
                                the merchant will pay the applicable GST rate but can claim it back through the tax
                                credit mechanism.
                            </p>
                            <span>3.Value Added Tax:</span>
                            <p>VAT, also known as commercial tax is not applicable on commodities that are zero rated
                                (eg. food and essential drugs) or those that fall under exports.
                                This tax is levied at all the stages of the supply chain, right from the manufacturers,
                                dealers and distributors to the end user.
                            </p>
                            <p>The value added tax is a tax that is levied at the discretion of the state government and
                                not all states
                                implemented it when it was first announced. The tax is levied on various goods sold in
                                the state and the
                                amount of the tax is decided by the state itself. For example in Gujrat the government
                                split all the good
                                into various categories called schedules. There are 3 schedules and each schedule has
                                its own VAT percentage.
                                For Schedule 3 the VAT is 1%, for schedule 2 the VAT is 5% and so on. Goods that have
                                not been classified into
                                any category have a VAT of 15%.
                            </p>
                            <span>4.Custom duty & Octroi:</span>
                            <p>When you purchase anything that needs to be imported from another country, a charge is
                                applied on it and that
                                is the customs duty. It applies to all the products that come in via land, sea or air.
                                Even if you bring in
                                products bought in another country to India, a customs duty can be levied on it. The
                                purpose of the customs
                                duty is to ensure that all the goods entering the country are taxed and paid for. Just
                                as customs duty ensures
                                that goods for other countries are taxed, octroi is meant to ensure that goods crossing
                                state borders within India are
                                taxed appropriately. It is levied by the state government and functions in much the same
                                way as customs duty does.
                                any category have a VAT of 15%.
                            </p>
                            <span>5.Excise Duty:</span>
                            <p>This is a tax that is levied on all the goods manufactured or produced in India.
                                It is different from customs duty because it is applicable only on things produced
                                in India and is also known as the Central Value Added Tax or CENVAT.
                                This tax is collected by the government from the manufacturer of the goods.
                                It can also be collected from those entities that receive manufactured goods
                                and employ people to transport the goods from the manufacturer to themselves.
                            </p>
                            <p>The Central Excise Rule set by the central government provide suggest
                                that every person that produces or manufactures any 'excisable goods',
                                or who stores such goods in a warehouse, will have to pay the duty
                                applicable on such goods in. Under this rule no excisable goods,
                                on which any duty is payable, will be allowed to move without
                                payment of duty from any place, where they are produced or manufactured.
                            </p>

                        </div>
                        <!--Other taxes:-->
                        <h5>Other Taxes:.</h5>
                        <p>While direct and indirect taxes are the two main types of taxes,
                            there are also these small cess taxes that are also seen in the country.
                            Although, they aren’t major revenue generators and are not considered to
                            be as such, these taxes help the government fund several initiatives that
                            concentrate on the improving the basic infrastructure and maintain general well being of the
                            country.
                            The taxes in this category are primarily referred to as a cess, which are taxes levied by
                            the government
                            and the funds generated through this are used for specific purposes as per the Finance
                            Minister’s discretions.
                        </p>
                        <p><b>Examples of Other taxes:</b></p>
                        <p>Below are some of the examples of other taxes that are seen most commonly in India.</p>
                        <div class="other-taxes">
                            <span>1.Professional Tax:</span>
                            <p>Professional Tax, or employment tax, is another form of tax levied only by state
                                governments in
                                India. According to professional tax norms, individuals earning income or practicing
                                a profession such as a doctor, lawyer, chartered accountant, or company secretary etc.
                                are required to pay this tax. However, not all states levy professional tax and the
                                rate differs across all the states that levy the tax.
                            </p>
                            <span>2.Property Tax - Municipal Tax:</span>
                            <p>Also known as Property Tax or Real Estate Tax, this is one of the taxes
                                levied by local municipal bodies of every city. These taxes are levied
                                in order to provide and maintain the for basic civic services.
                                All owners of residential or commercial properties are subject to Municipal Tax.
                            </p>
                            <span>3.Entertainment Tax:</span>
                            <p>Entertainment Tax is yet another type of tax commonly seen in India.
                                It is levied by the government on feature films, television series,
                                exhibitions, amusement, and recreational parlours.
                                This tax is collected taking into account a business entity’s
                                gross collection collected from earnings based on commercial shows,
                                film festival earnings, and audience participation.
                            </p>
                            <span>4.Stamp Duty, Registration Fees, Transfer Tax:</span>
                            <p>Stamp duty, registration fees, and transfer taxes are collect as a supplement
                                of property tax. For instance, when an individual purchases a property,
                                they also have to pay for the cost of stamps (stamp duty),
                                registration fees (fee charged by local registrar to legalize
                                a property transaction), and transfer tax (tax paid to transfer the ownership of a
                                commodity.
                            </p>
                            <span>6.Gift Tax:</span>
                            <p>When an individual receives a gift from another person. It is considered to be a part of
                                their income generated through “other sources” and the relevant tax is levied.
                                This tax is applicable if the gift amount is more than Rs. 50,000 in a year.
                            </p>
                            <span>7.Wealth Tax:</span>
                            <p>Wealth Tax was another tax levied by the government, which was charged based
                                on the net wealth of the assessee. Wealth tax is chargeable with respect
                                to the net wealth of a property. Net wealth is equal to all the assets
                                an individual owns minus the cost of acquiring them (any loan taken to acquire them).
                                Wealth tax is no longer operational as it was abolished during the Union Budget of 2015.
                            </p>
                            <p>The wealth tax, governed by the Wealth Tax Act, allows the government to impose a
                                tax on the net wealth of a person, an HUF or a company. This tax is set to be
                                abolished in 2016 but until then the tax levied on
                                the net wealth is about 1% of the wealth that exceeds Rs. 30 lakhs.
                                There are exceptions to this tax which are organisations that don’t have to pay wealth
                                tax.
                                These organisations could be trusts, partnership firms, social clubs, political parties,
                                etc.
                            </p>
                            <span>8.Toll Tax & Road Tax:</span>
                            <p>Toll tax is a tax you often pay to use any form of infrastructure developed by
                                the government, example roads and bridges. The tax amount levied is rather
                                negligible which is used for maintenance and basic upkeep of a particular project.
                            </p>
                            <span>9.Swachh Bharat Cess:</span>
                            <p>This is a cess imposed by the government of India and was
                                started from 15 November 2015. This tax is applicable
                                on all taxable services and the cess currently stands
                                at 0.5%. Swachh Bharat cess is levied over and above the
                                14% service tax that is prevalent in the present times.
                                One thing worth noting here is that this cess is not
                                applicable on services that are fully exempt of service
                                tax or those services covered under the negative list of services.
                                It is collected by the Consolidate Fund of India and will be used
                                to funding and promoting any government campaigns concerning the
                                Swachh Bharat initiatives. This tax, however, is independent
                                of service tax and is charged as a separate line item in invoices.
                            </p>
                            <span>10.Krishi Kalyan Cess:</span>
                            <p>This is yet another cess brought about by the government of India
                                since the June of 2016. It is basically introduced in order
                                to extend welfare to all the farmers and to the improvement
                                of agricultural facilities in the country.
                                Like Swachh Bharat cess, this tax is also
                                applicable on all taxable services with an
                                effective rate of 0.5% and is charged over and
                                above the service tax and Swachh Bharat cess.

                            </p>
                            <span>11.Infrastructure Cess :</span>
                            <p>Infrastructure cess is another tax brought into
                                effect from the 1st of June 2016. Under this tax,
                                a cess of 1% is applicable on petrol/LPG/CNG-driven
                                motor vehicles which are 4 meters or
                                less in length and 1200cc or less in engine capacity.
                                In case the diesel motor vehicles which don’t exceed
                                the 4 metre length and have engines with capacities
                                less than 1500cc, a tax of 2.5% is to be paid.
                                For big sedans and SUVs, the cess stands at 4%
                                of the overall cost of the vehicle.

                            </p>
                            <span>12.Entry Tax:</span>
                            <p>Entry tax is a tax levied in select states across the country like Uttarakhand,
                                Madhya Pradesh, Gujarat, Assam, and Delhi. Under this, all items
                                entering the state ordered via e-commerce establishments are taxed.
                                The rate for this tax varies between 5.5% to 10%.
                            </p>
                            <p>These are all the types and kinds of taxes that are present
                                in India’s current economic scenario.
                                The funds collected from these methods don’t
                                just fuel the country’s revenues but also provides
                                the much-needed impetus to help the lower classes prosper.
                            </p>

                        </div>
                        <span>Benefits of Taxes:</span>
                        <p>Even though most people are always at odds with the idea of taxation,
                            there are some advantages to taxes, the least of which is that
                            it provides the government the resources it needs for economic development.
                            Some of the other benefits of taxes are:
                        </p>
                        <ul>
                            <li>It encourages savings and investments because if a
                                person invests in certain instruments, then the
                                amount invested is reduced from their taxable income
                                thus bringing down the tax they have to pay.
                                This investment is subject to certain limits
                                that are detailed in the IT Act.
                            </li>
                            <li>Paying taxes means that you have to file your tax
                                returns which in turn means that when you apply for
                                a home loan for that home loan, it’s easier to get
                                it because one of the things many banks require is
                                proof that you have been filing taxes regularly.
                            </li>
                        </ul>
                        <h5>Penalty for Not Paying Taxes:</h5>
                        <p>Each type of tax has its own penalties associated with it.
                            These penalties can range from fines to imprisonment depending
                            on the severity of the crime. In some cases the penalty could
                            be that you <b>will have to pay what is owed in taxes along with
                                additional sums as fine</b>, which are decided upon by government officials.
                        </p>
                        <p>It is always advisable to pay taxes on time and always be aware of the taxes that you,
                            as a consumer, are liable to pay so that no-one can take you for a ride.

                        </p>

                    </div>





                    <!--row 4-->
                    <div class="row R4">
                        <h2 class="p-2">Maximize Your Tax Returns With Our Tax Preparation Services</h2>
                        <p>Our tax services focus on maintaining profitability and capitalizing on any new
                            opportunities.
                            At Robert Hall & Associates, we steer you closer to these goals with over four decades of
                            experience.
                            Our tax preparers stay on top of the latest tax laws and regulations so you can be confident
                            that
                            you are not missing out on any money-saving opportunities. Our tax preparation services
                            include:
                        </p>
                        <div class="">
                            <p><i class="fa-regular fa-circle-check"></i> Valuation of Shares</p>
                            <p><i class="fa-regular fa-circle-check"></i> Valuation of Business Enterprise</p>
                            <p><i class="fa-regular fa-circle-check"></i> Valuation of fixed assets</p>
                            <p><i class="fa-regular fa-circle-check"></i> Valuation of Brand Equity</p>
                            <p><i class="fa-regular fa-circle-check"></i> Valuation of Intellectual property rights</p>
                        </div>
                    </div>
                    <!--row 5-->
                    <div class="row R5">
                        <h2 class="p-2">Los Angeles Tax Preparation Service With Audit Insurance</h2>
                        <p>Fint offers clients additional peace of mind with our audit protection program.
                            Our audit protection program takes tax preparation to the next level by including
                            consultations with a tax professional, a W-4 review, financial planning, and more.
                            Contact our office at 824.242.4880 to learn more about our audit protection program.
                        </p>
                        <p>The symbiotic relationship between technology and human expertise
                            creates a powerful synergy that benefits clients in their financial endeavors.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>


</template>
<script>
export default {
    data() {
        return {
            name: "AppSubservice",
           
        }
    }
}
</script>
<style scoped>
p {
    font-size: 15px;

}

.routlink {
    color: white;
    text-decoration: none;

}

.bi-chevron-right {
    color: white !important;
    /* font-weight:bold; */

}

.service-sec1 {
    color: white;
    background-image: url("../../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 400px;

}

/* Service-section-2 */
/* col1 */
.mini-h,
h4 {
    color: rgb(0, 84, 139);
    font-weight: 700;

}

.service-sec2 li {
    font-size: 15px;

}

.service-sec2 h2 {
    color: #317447;
}

.service-sec2 img {
    height: auto;
    width: 100%;
}

/* col2 */
.servpage-sec1-col2 {
    width: 400px;
    /* background-color: #8bdbaf; */
    padding: 25px 25px;
}

.service-sec2 h3 {
    font-size: 25px;
    margin: 30px 0;
    color: #3a526a;
}

.service-sec2 hr {
    border-bottom: 2px solid gray;
    margin-bottom: 40px;
}

.service-sec2 ul {
    padding-left: 5px;
    list-style: none;
}

.service-sec2 ul li {
    margin-bottom: 25px;
}

.service-sec2 ul li:hover {
    cursor: pointer;
    font-weight: 700;
    color: #3a526a;
    text-decoration: underline #317447 1px;
}


/*********form************/
.f {
    width: 100%;
    height: auto;
    background-color: #F1F6F2;
    border-radius: 25px;
}

.send-form {
    margin: 30px 15px;
    padding: 20px 0px;

}

.send-form input {
    width: 100%;
    height: auto;
    font-size: 17px;
    margin-bottom: 30px;
    background-color: white;
    border: transparent;
    padding: 8px;
}

.send-form .msg {
    padding-bottom: 75px;
}

.send-form button {
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #317447;
    border: transparent;
}
/****Row R2 ****/

.R2-list{
    padding-left: 30px;
}

.R2 ul li ,.R3 ul li{
    margin-bottom: 0px;
    list-style: disc;
    font-weight: 500;
    color: #000;
}
/****Row R3 ****/
.R3 h5{
    font-size: 18px;
    padding: 0 10px;
}
.R3 span{
    color: rgb(0, 84, 139);
    margin-bottom: 15px;
}
.R3 table{
    background: #eff7ff;
    border:solid 1px  #e2e2e2 ;
    margin-bottom: 20px;  
    margin-left:10px;
}
.R3 table tr,.R3 table td{
    border:solid 2px  #e2e2e2 ;
    padding:5px 2px 2px 5px;
    font-size: 15px;
}
.R3 .card{
    background: #eff7ff;
    border:solid 2px  #e2e2e2 ;
    padding:15px;
    width:600px;
    margin-bottom: 20px;
    margin-left:10px;
}
.R3 .card .card-body{
    display: flex;
    align-items: start;
    gap:25px;
    padding:15px 0px;
}
.R3 .card .card-body button{
    width: 200px;
    height: 35px;
}
.R3 .table-heading{
    margin-bottom: 10px;
}

.R3 .R3-ul-list{
    margin-left: 10px;
}
</style>